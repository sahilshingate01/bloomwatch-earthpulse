import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const BloomTrendsSection = () => {
  // Mock data for cherry blossom trends in Tokyo
  const tokyoBloomData = [
    { year: 2010, peakDay: 95, temp: 12.3 },
    { year: 2012, peakDay: 90, temp: 13.1 },
    { year: 2014, peakDay: 93, temp: 12.8 },
    { year: 2016, peakDay: 88, temp: 13.5 },
    { year: 2018, peakDay: 85, temp: 14.2 },
    { year: 2020, peakDay: 83, temp: 14.8 },
    { year: 2022, peakDay: 80, temp: 15.1 },
    { year: 2024, peakDay: 78, temp: 15.7 },
  ];

  // Mock global bloom intensity data
  const globalBloomData = [
    { month: "Jan", northern: 15, southern: 85, tropical: 60 },
    { month: "Feb", northern: 20, southern: 75, tropical: 65 },
    { month: "Mar", northern: 45, southern: 60, tropical: 70 },
    { month: "Apr", northern: 80, southern: 40, tropical: 75 },
    { month: "May", northern: 95, southern: 25, tropical: 80 },
    { month: "Jun", northern: 90, southern: 15, tropical: 85 },
    { month: "Jul", northern: 75, southern: 20, tropical: 90 },
    { month: "Aug", northern: 65, southern: 30, tropical: 85 },
    { month: "Sep", northern: 50, southern: 50, tropical: 80 },
    { month: "Oct", northern: 35, southern: 70, tropical: 75 },
    { month: "Nov", northern: 25, southern: 85, tropical: 70 },
    { month: "Dec", northern: 18, southern: 90, tropical: 65 },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bloom Trends Over Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracking changes in bloom patterns and their relationship with climate data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cherry Blossom Trends */}
          <Card className="hover:shadow-nature transition-all duration-300 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌸 Cherry Blossom Peak Dates - Tokyo
                <span className="text-sm font-normal text-muted-foreground">(2010-2024)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tokyoBloomData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="year" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      label={{ value: 'Day of Year', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))'
                      }}
                      formatter={(value, name) => [
                        name === 'peakDay' ? `Day ${value} (${Math.floor(Number(value)/30) + 1}/${Number(value)%30 || 30})` : `${value}°C`,
                        name === 'peakDay' ? 'Peak Bloom Day' : 'Avg Spring Temp'
                      ]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="peakDay" 
                      stroke="hsl(var(--bloom-pink))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--bloom-pink))', strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 8, fill: 'hsl(var(--bloom-purple))' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Cherry blossoms are blooming 17 days earlier than in 2010, indicating climate change effects.
              </p>
            </CardContent>
          </Card>

          {/* Global Seasonal Patterns */}
          <Card className="hover:shadow-nature transition-all duration-300 animate-slide-in-left [animation-delay:0.2s]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌍 Global Bloom Intensity by Hemisphere
                <span className="text-sm font-normal text-muted-foreground">(Seasonal Pattern)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={globalBloomData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      label={{ value: 'Bloom Intensity %', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="northern"
                      stackId="1"
                      stroke="hsl(var(--forest-medium))"
                      fill="hsl(var(--forest-light))"
                      name="Northern Hemisphere"
                    />
                    <Area
                      type="monotone"
                      dataKey="southern"
                      stackId="2"
                      stroke="hsl(var(--sky-medium))"
                      fill="hsl(var(--sky-light))"
                      name="Southern Hemisphere"
                    />
                    <Area
                      type="monotone"
                      dataKey="tropical"
                      stackId="3"
                      stroke="hsl(var(--bloom-purple))"
                      fill="hsl(var(--bloom-pink))"
                      name="Tropical Regions"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Seasonal bloom patterns show opposite cycles between hemispheres and consistent tropical activity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-gradient-bloom text-primary-foreground animate-fade-in-up">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="text-xl font-semibold mb-2">Earlier Blooms</h3>
            <p className="text-sm opacity-90">Spring flowers bloom 2-3 weeks earlier than 50 years ago</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-earth text-primary-foreground animate-fade-in-up [animation-delay:0.1s]">
            <div className="text-3xl mb-2">🌡️</div>
            <h3 className="text-xl font-semibold mb-2">Temperature Link</h3>
            <p className="text-sm opacity-90">Every 1°C increase advances bloom by 5-7 days</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-nature text-primary-foreground animate-fade-in-up [animation-delay:0.2s]">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Regional Variation</h3>
            <p className="text-sm opacity-90">Arctic regions show 3x faster bloom advancement</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BloomTrendsSection;