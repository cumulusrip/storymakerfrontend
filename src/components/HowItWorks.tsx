import { Card } from "@/components/ui/card";
import { PenTool, Wand2, Share2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PenTool,
    title: "Choose Your Topic",
    description: "Select from trending topics or input your own idea. Our AI will understand your niche and target audience."
  },
  {
    step: "02", 
    icon: Wand2,
    title: "AI Creates Everything",
    description: "Our advanced AI generates the script, voiceover, visuals, and edits everything together automatically."
  },
  {
    step: "03",
    icon: Share2,
    title: "Publish & Go Viral",
    description: "Download your video and publish it across all platforms. Watch your content reach millions of viewers."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating viral videos has never been easier. Just follow these three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0">
                  <div className="h-full bg-gradient-to-r from-primary to-transparent w-1/2"></div>
                </div>
              )}
              
              <Card className="card-gradient p-8 relative z-10 hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  {/* Step Number */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;