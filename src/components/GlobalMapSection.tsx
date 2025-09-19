import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GlobalMapSection = () => {
  // Mock regions data for demonstration
  const regions = [
    { name: "Japan", intensity: "High", species: "Cherry Blossoms", month: "April", pollen: "Medium" },
    { name: "Netherlands", intensity: "Very High", species: "Tulips", month: "May", pollen: "High" },
    { name: "California", intensity: "Medium", species: "Poppies", month: "March", pollen: "Low" },
    { name: "Turkey", intensity: "High", species: "Roses", month: "June", pollen: "Medium" },
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Very High": return "bg-bloom-purple";
      case "High": return "bg-bloom-pink";
      case "Medium": return "bg-bloom-yellow";
      default: return "bg-forest-light";
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Bloom Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of bloom intensity worldwide using NASA Earth observation data
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="relative bg-card rounded-2xl shadow-earth mb-12 overflow-hidden">
          <div className="h-96 md:h-[500px] bg-gradient-to-br from-sky-light to-forest-light flex items-center justify-center relative">
            {/* World Map Simulation */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Simplified continent shapes */}
                <path d="M150,200 Q200,150 250,180 Q300,160 350,190 Q400,170 450,200" 
                      stroke="currentColor" strokeWidth="3" fill="none" className="text-forest-deep" />
                <circle cx="200" cy="180" r="20" className="fill-bloom-pink animate-bloom-grow" />
                <circle cx="350" cy="170" r="15" className="fill-bloom-yellow animate-bloom-grow [animation-delay:0.5s]" />
                <circle cx="450" cy="190" r="18" className="fill-bloom-purple animate-bloom-grow [animation-delay:1s]" />
              </svg>
            </div>
            
            <div className="text-center z-10">
              <div className="text-6xl mb-4 animate-earth-pulse">🌍</div>
              <p className="text-xl font-semibold text-forest-deep mb-2">Interactive Map Coming Soon</p>
              <p className="text-muted-foreground">Click regions to explore bloom data</p>
            </div>
          </div>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <Card key={region.name} className="hover:shadow-bloom transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{region.name}</span>
                  <div className={`w-4 h-4 rounded-full ${getIntensityColor(region.intensity)}`} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Intensity</span>
                  <Badge variant="secondary">{region.intensity}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Species</span>
                  <span className="text-sm font-medium">{region.species}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Peak Month</span>
                  <span className="text-sm font-medium">{region.month}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pollen Level</span>
                  <Badge variant={region.pollen === "High" ? "destructive" : "outline"}>
                    {region.pollen}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalMapSection;