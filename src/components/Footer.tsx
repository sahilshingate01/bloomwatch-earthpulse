import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <h3 className="text-2xl font-bold">BloomWatch</h3>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Tracking Earth's blossoms through NASA satellite data and advanced Earth observation technology. 
              Understanding our planet's natural rhythms for a sustainable future.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                🐦 Twitter
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                📧 Newsletter
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                🔬 Research
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#global-map" className="hover:text-bloom-pink transition-colors">Global Bloom Map</a></li>
              <li><a href="#trends" className="hover:text-bloom-pink transition-colors">Bloom Trends</a></li>
              <li><a href="#predictions" className="hover:text-bloom-pink transition-colors">Local Predictions</a></li>
              <li><a href="#education" className="hover:text-bloom-pink transition-colors">Why It Matters</a></li>
              <li><a href="#data" className="hover:text-bloom-pink transition-colors">NASA Data</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-bloom-pink transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-bloom-pink transition-colors">Download Data</a></li>
              <li><a href="#" className="hover:text-bloom-pink transition-colors">Citizen Science</a></li>
              <li><a href="#" className="hover:text-bloom-pink transition-colors">Educational Materials</a></li>
              <li><a href="#" className="hover:text-bloom-pink transition-colors">Research Papers</a></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Credits */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <span>🚀 NASA Space Apps Challenge 2025</span>
              </div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2">
                <span>🛰️ Powered by NASA Earthdata</span>
              </div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2">
             <span>Made With Sahil</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-primary-foreground/70">
              © {currentYear} BloomWatch. Open source project.
            </div>
          </div>

          {/* Additional Credits */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/10">
            <div className="text-center text-xs text-primary-foreground/60 space-y-2">
              <p>
                Satellite imagery courtesy of NASA/USGS Landsat Program, NASA MODIS, NOAA VIIRS, and NASA JPL AVIRIS
              </p>
              <p>
                Climate data from NOAA National Centers for Environmental Information and NASA Goddard Institute for Space Studies
              </p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <img src="/api/placeholder/80/40" alt="NASA Logo" className="h-8 opacity-70" />
                <img src="/api/placeholder/80/40" alt="USGS Logo" className="h-8 opacity-70" />
                <img src="/api/placeholder/80/40" alt="NOAA Logo" className="h-8 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;