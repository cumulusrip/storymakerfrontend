import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* GPT Badge */}
            <Badge className="bg-card text-primary border-primary/20 px-4 py-2">
              ⚡ Powered by GPT-4.5
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Create{" "}
                <span className="text-gradient">viral</span><br />
                <span className="text-gradient">faceless videos</span><br />
                on Auto-Pilot.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Create AI Videos in minutes. Our AI creation tool creates viral AI videos for you.
              </p>
            </div>

            {/* CTA Button */}
            <Button className="btn-primary text-lg px-8 py-6 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-card border-2 border-background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${1500000000000 + i}?w=40&h=40&fit=crop&crop=face)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by 27,000+ creators
              </span>
            </div>
          </div>

          {/* Right Content - Product Mockup */}
          <div className="relative animate-float">
            <div className="relative">
              <img
                src={heroMockup}
                alt="StoryShort AI video creation interface"
                className="w-full h-auto rounded-2xl shadow-2xl glow"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-card rounded-lg p-3 shadow-card animate-pulse-glow">
                <div className="text-sm font-medium text-primary">The Cleopatra Effect</div>
                <div className="text-xs text-muted-foreground">Historical Drama</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-3 shadow-card animate-pulse-glow">
                <div className="text-sm font-medium text-primary">Apollo 11 Moon Landing</div>
                <div className="text-xs text-muted-foreground">Space Documentary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;