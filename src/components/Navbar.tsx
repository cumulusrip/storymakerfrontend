import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Play className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gradient">StoryShort</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
          <Button className="btn-primary">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;