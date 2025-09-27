import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover Premium 
            <span className="block text-accent">Electronics</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Elevate your lifestyle with our curated collection of premium tech and accessories. 
            Quality meets innovation in every product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" className="text-lg px-8">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;