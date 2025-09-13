import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=face",
    content: "StoryShort AI has completely transformed my content creation process. I can now create viral videos in minutes instead of hours!",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "YouTube Creator",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
    content: "The quality of videos generated is incredible. My subscribers love the content and my channel has grown 300% since using StoryShort.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "This tool is a game-changer for agencies. We can now serve multiple clients with high-quality video content at scale.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "I was skeptical at first, but the AI really understands storytelling. My videos consistently get high engagement rates.",
    rating: 5
  },
  {
    name: "Tyler Durden",
    role: "Influencer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    content: "The auto-pilot feature is amazing. I can focus on strategy while StoryShort handles all the content creation.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Social Media Manager",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b402?w=64&h=64&fit=crop&crop=face",
    content: "Our team productivity has increased dramatically. We're creating more content than ever before with better results.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Loved by <span className="text-gradient">creators</span> worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of content creators who are already creating viral videos with StoryShort AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-gradient p-6 hover:scale-105 transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;