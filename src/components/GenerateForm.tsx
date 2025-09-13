import { useState, useEffect, useRef } from "react";

const GenerateForm = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [finalVideoUrl, setFinalVideoUrl] = useState<string | null>(null);
  const [creatingVideo, setCreatingVideo] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    if (selectedVideo !== null && audioRef.current && videoRefs.current[selectedVideo]) {
      const audioDuration = audioRef.current.duration;
      const videoDuration = videoRefs.current[selectedVideo].duration;

      if (!isNaN(audioDuration) && !isNaN(videoDuration) && audioDuration > videoDuration) {
        setWarning("Audio is longer than video. Choose image only, video is too short.");
      } else {
        setWarning(null);
      }
    } else {
      setWarning(null);
    }
  }, [selectedVideo, audioRef.current, videoRefs.current]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    setResult(null);
    setSelectedImage(null);
    setSelectedVideo(null);
    setFinalVideoUrl(null);
    setWarning(null);

    try {
      const formData = new URLSearchParams();
      formData.append("prompt", prompt);

      const res = await fetch("http://localhost:8001/generate", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const handleCreateFinalVideo = async () => {
    if (selectedImage === null && selectedVideo === null) return;

    setCreatingVideo(true);
    try {
      const res = await fetch("http://localhost:8001/final-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audio: result.audio_url,
          image: selectedImage !== null ? result.assets.images[selectedImage] : null,
          video: selectedVideo !== null ? result.assets.videos[selectedVideo] : null,
        }),
      });

      const data = await res.json();
      setFinalVideoUrl(`http://localhost:8001${data.final_video_url}`);
    } catch (err) {
      console.error(err);
    }
    setCreatingVideo(false);
  };

  const handleDownload = async () => {
    if (!finalVideoUrl) return;

    const res = await fetch(finalVideoUrl);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "final_video.mp4";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-gray-900 text-white rounded-xl shadow-xl space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter a script prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate Script"}
        </button>
      </form>

      {result && (
        <div className="space-y-6">
          {/* Script */}
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Generated Script</h2>
            <p>{result.script}</p>
          </div>

          {/* Audio */}
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Audio</h2>
            <audio ref={audioRef} controls src={`http://localhost:8001${result.audio_url}`} className="w-full" />
          </div>

          {/* {warning && (
            <div className="bg-red-600 p-2 rounded text-sm">
              {warning}
            </div>
          )} */}

          {/* Select Image */}
          <div>
            <h2 className="text-lg font-bold mb-2">Select an Image</h2>
            <div className="flex space-x-4">
              {result.assets.images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={`http://localhost:8001${img}`}
                  className={`w-32 h-32 object-cover rounded-lg cursor-pointer border-4 ${
                    selectedImage === i ? "border-blue-500" : "border-gray-700"
                  }`}
                  onClick={() => setSelectedImage(selectedImage === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* Select Video */}
          <div>
            <h2 className="text-lg font-bold mb-2">Select a Video</h2>
            <div className="flex space-x-4">
              {result.assets.videos.map((vid: string, i: number) => (
                <video
                  key={i}
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={`http://localhost:8001${vid}`}
                  className={`w-48 cursor-pointer rounded-lg border-4 ${
                    selectedVideo === i ? "border-blue-500" : "border-gray-700"
                  }`}
                  onClick={() => setSelectedVideo(selectedVideo === i ? null : i)}
                  controls
                />
              ))}
            </div>
          </div>

          {/* Create Final Video */}
      {(selectedImage !== null || selectedVideo !== null) && (
  <div className="mt-4 flex flex-col items-center space-y-2">
    <button
      onClick={handleCreateFinalVideo}
      className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
    >
      {creatingVideo ? "Creating Video..." : "Create Final Video"}
    </button>
    {finalVideoUrl && (
      <button
        onClick={handleDownload}
        className="mt-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Preview / Download Final Video
      </button>
    )}
  </div>
)}
        </div>
      )}
    </div>
  );
};

export default GenerateForm;
