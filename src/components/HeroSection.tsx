import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-earth-blooms.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Earth showing global blooming patterns from space"
          className="w-full h-full object-cover animate-earth-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-transparent to-background/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
          BloomWatch
          <span className="block text-3xl md:text-4xl font-normal text-bloom-pink mt-2">
            The Pulse of Planet Earth
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s] leading-relaxed">
          Explore when and where plants bloom around the world and learn how bloom events affect ecosystems, agriculture, and communities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            🌸 Explore Blooms
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            📊 View Data
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float [animation-delay:1s]">
          <div className="w-12 h-12 bg-bloom-yellow rounded-full opacity-70" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float [animation-delay:2s]">
          <div className="w-8 h-8 bg-bloom-pink rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/3 right-20 animate-gentle-sway">
          <div className="w-6 h-6 bg-bloom-purple rounded-full opacity-50" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-bloom-grow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;