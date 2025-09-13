import { Card } from "@/components/ui/card";
import { Zap, Video, Wand2, Globe, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Generation",
    description: "Create unique faceless videos for every niche using advanced AI technology."
  },
  {
    icon: Video,
    title: "Instant Video Creation",
    description: "From image generation to video generation, create any style of video in seconds."
  },
  {
    icon: Wand2,
    title: "Auto-Pilot Mode",
    description: "Set it and forget it. Our AI handles everything from script to final video."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create videos in multiple languages to reach a global audience."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "What used to take hours now takes minutes. Focus on growing your channel."
  },
  {
    icon: TrendingUp,
    title: "Viral Content",
    description: "Our AI analyzes trending topics to create content that goes viral."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Create unique <span className="text-gradient">faceless videos</span><br />
            for every niche
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From image generation to video generation, StoryShort can generate any style of video in seconds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-gradient p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;