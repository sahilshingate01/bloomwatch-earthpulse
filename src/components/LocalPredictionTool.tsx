import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface BloomPrediction {
  species: string;
  startDate: string;
  peakDate: string;
  endDate: string;
  intensity: string;
  icon: string;
}

const LocalPredictionTool = () => {
  const [location, setLocation] = useState("");
  const [predictions, setPredictions] = useState<BloomPrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock prediction data
  const mockPredictions: BloomPrediction[] = [
    {
      species: "Cherry Blossoms",
      startDate: "March 15",
      peakDate: "March 28",
      endDate: "April 10",
      intensity: "High",
      icon: "🌸"
    },
    {
      species: "Tulips",
      startDate: "April 5",
      peakDate: "April 20",
      endDate: "May 5",
      intensity: "Very High",
      icon: "🌷"
    },
    {
      species: "Daffodils",
      startDate: "March 8",
      peakDate: "March 22",
      endDate: "April 2",
      intensity: "Medium",
      icon: "🌻"
    },
    {
      species: "Lilacs",
      startDate: "April 25",
      peakDate: "May 10",
      endDate: "May 25",
      intensity: "High",
      icon: "💜"
    }
  ];

  const handlePredict = async () => {
    if (!location.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPredictions(mockPredictions);
      setIsLoading(false);
    }, 1500);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Very High": return "destructive";
      case "High": return "default";
      case "Medium": return "secondary";
      default: return "outline";
    }
  };

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <section className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Local Bloom Predictor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized bloom forecasts for your area using advanced climate models and satellite data
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8 shadow-earth animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📍 Enter Your Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter city name or coordinates (e.g., Tokyo, 35.6762,139.6503)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handlePredict()}
              />
              <Button 
                variant="nature" 
                onClick={handlePredict} 
                disabled={!location.trim() || isLoading}
                className="sm:w-auto w-full"
              >
                {isLoading ? "Predicting..." : "🔮 Predict Blooms"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {predictions.length > 0 && (
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Bloom Forecast for {location} - {currentMonth} 2025
            </h3>
            
            {/* Timeline */}
            <div className="mb-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-light to-bloom-pink"></div>
              <div className="space-y-6">
                {predictions.map((prediction, index) => (
                  <div key={prediction.species} className="relative flex items-center animate-fade-in-up"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="absolute left-4 w-4 h-4 bg-bloom-pink rounded-full border-4 border-background z-10"></div>
                    <Card className="ml-12 flex-1 hover:shadow-bloom transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{prediction.icon}</span>
                            <h4 className="text-lg font-semibold">{prediction.species}</h4>
                          </div>
                          <Badge variant={getIntensityColor(prediction.intensity)}>
                            {prediction.intensity}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Start</p>
                            <p className="font-medium">{prediction.startDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Peak</p>
                            <p className="font-medium text-bloom-purple">{prediction.peakDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">End</p>
                            <p className="font-medium">{prediction.endDate}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-bloom text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">🎯 Prediction Accuracy</h4>
                <p className="opacity-90 mb-4">
                  Our AI model combines NASA satellite data, local weather patterns, and historical bloom records
                  to provide predictions with 85% accuracy for the next 30 days.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-lg font-bold">🛰️</div>
                    <p>MODIS Data</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold">🌡️</div>
                    <p>Climate Models</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold">📊</div>
                    <p>15 Year History</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold">🤖</div>
                    <p>AI Processing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        {predictions.length === 0 && (
          <div className="text-center animate-fade-in-up">
            <div className="text-6xl mb-4">🌺</div>
            <p className="text-lg text-muted-foreground mb-6">
              Enter your location above to see personalized bloom predictions
            </p>
            <Button variant="outline" size="lg">
              📧 Get Email Alerts
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalPredictionTool;