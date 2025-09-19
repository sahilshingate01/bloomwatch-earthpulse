import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NASADataSection = () => {
  const datasets = [
    {
      name: "MODIS",
      fullName: "Moderate Resolution Imaging Spectroradiometer",
      description: "Provides global vegetation indices and land surface temperature data with daily coverage",
      resolution: "250m - 1km",
      frequency: "Daily",
      applications: ["Vegetation monitoring", "Land cover mapping", "Climate studies"],
      icon: "🛰️",
      color: "bg-forest-medium"
    },
    {
      name: "Landsat",
      fullName: "Landsat Data Continuity Mission",
      description: "Long-term archive of Earth's land surface with consistent spectral measurements since 1972",
      resolution: "30m",
      frequency: "16 days",
      applications: ["Change detection", "Historical analysis", "High-resolution monitoring"],
      icon: "🌍",
      color: "bg-sky-medium"
    },
    {
      name: "VIIRS",
      fullName: "Visible Infrared Imaging Radiometer Suite",
      description: "Next-generation Earth observation sensor providing improved vegetation and climate data",
      resolution: "375m - 750m",
      frequency: "Daily",
      applications: ["Real-time monitoring", "Disaster response", "Environmental tracking"],
      icon: "📡",
      color: "bg-bloom-purple"
    },
    {
      name: "AVIRIS",
      fullName: "Airborne Visible/Infrared Imaging Spectrometer",
      description: "Hyperspectral imaging for detailed chemical analysis of vegetation and soils",
      resolution: "4m - 20m",
      frequency: "Campaign-based",
      applications: ["Species identification", "Plant health assessment", "Biochemical analysis"],
      icon: "✈️",
      color: "bg-earth-brown"
    }
  ];

  const detectionMethods = [
    {
      title: "Spectral Analysis",
      description: "Plants reflect different wavelengths of light based on their health and growth stage",
      icon: "🌈"
    },
    {
      title: "Vegetation Indices",
      description: "Mathematical combinations of spectral bands reveal vegetation vigor and phenology",
      icon: "📊"
    },
    {
      title: "Temperature Mapping",
      description: "Land surface temperature affects bloom timing and can predict flowering events",
      icon: "🌡️"
    },
    {
      title: "Change Detection",
      description: "Comparing images over time reveals seasonal patterns and long-term trends",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powered by NASA Earth Observation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BloomWatch leverages decades of NASA satellite data and advanced remote sensing 
            technology to track plant blooming patterns across the globe
          </p>
        </div>

        {/* NASA Datasets */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            🛰️ Satellite Data Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {datasets.map((dataset, index) => (
              <Card key={dataset.name} className="hover:shadow-earth transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{dataset.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{dataset.name}</span>
                        <Badge variant="outline" className="text-xs">NASA</Badge>
                      </div>
                      <p className="text-sm font-normal text-muted-foreground">
                        {dataset.fullName}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{dataset.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Resolution</p>
                      <p className="text-muted-foreground">{dataset.resolution}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Frequency</p>
                      <p className="text-muted-foreground">{dataset.frequency}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-foreground mb-2">Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {dataset.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={`h-1 ${dataset.color} rounded-full`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Satellites Detect Blooms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            🔬 How Satellite Imagery Detects Blooms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detectionMethods.map((method, index) => (
              <Card key={method.title} className="text-center hover:shadow-bloom transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{method.title}</h4>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Process */}
        <Card className="mb-12 bg-gradient-earth text-primary-foreground animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              🚀 From Space to Your Screen: The BloomWatch Process
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-3">
                <div className="text-3xl">📡</div>
                <h4 className="font-semibold">Data Collection</h4>
                <p className="text-sm opacity-90">Satellites capture multispectral imagery daily</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">⚙️</div>
                <h4 className="font-semibold">Processing</h4>
                <p className="text-sm opacity-90">AI algorithms analyze vegetation indices</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">🧠</div>
                <h4 className="font-semibold">Analysis</h4>
                <p className="text-sm opacity-90">Machine learning identifies bloom patterns</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">📱</div>
                <h4 className="font-semibold">Visualization</h4>
                <p className="text-sm opacity-90">Results displayed on interactive maps</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Links and Credits */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Explore NASA's Open Data
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All BloomWatch visualizations are based on publicly available NASA datasets. 
            Explore the original data sources and contribute to Earth observation research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="nature" size="lg">
              🌍 NASA Earthdata
            </Button>
            <Button variant="outline" size="lg">
              📊 View Raw Data
            </Button>
            <Button variant="outline" size="lg">
              📖 Research Papers
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>Data: NASA/USGS</span>
            <span>•</span>
            <span>Processing: BloomWatch Team</span>
            <span>•</span>
            <span>Space Apps Challenge 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NASADataSection;