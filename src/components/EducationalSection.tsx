import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EducationalSection = () => {
  const educationalCards = [
    {
      icon: "🐝",
      title: "Pollinators & Ecosystems",
      description: "Plant blooms provide essential food sources for bees, butterflies, and other pollinators. The timing of blooms affects entire food webs and ecosystem stability.",
      details: [
        "70% of flowering plants depend on animal pollinators",
        "Mistimed blooms can lead to pollinator population decline",
        "Early blooms may miss key pollinator emergence periods"
      ],
      color: "bg-bloom-yellow"
    },
    {
      icon: "🌾",
      title: "Agriculture & Crop Yields",
      description: "Bloom timing directly impacts agricultural productivity and food security. Farmers use bloom data to optimize planting schedules and predict harvest timing.",
      details: [
        "Apple orchards lose 10% yield per week of mistimed bloom",
        "Climate change affects bloom synchronization with pollinators",
        "Precision agriculture uses bloom predictions for irrigation timing"
      ],
      color: "bg-earth-tan"
    },
    {
      icon: "🌡️",
      title: "Climate Change Indicators",
      description: "Changes in bloom patterns serve as early warning signals for climate change. Scientists track these 'phenological' shifts to understand environmental changes.",
      details: [
        "Spring blooms advance 2.5 days per decade on average",
        "Arctic species show most dramatic timing shifts",
        "Bloom data helps validate climate models"
      ],
      color: "bg-sky-medium"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Bloom Timing Matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding when plants bloom helps us protect ecosystems, improve agriculture, 
            and track the impacts of our changing climate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {educationalCards.map((card, index) => (
            <Card key={card.title} className="hover:shadow-nature transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:animate-bloom-grow">{card.icon}</div>
                <CardTitle className="text-xl mb-3">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
                
                <div className="space-y-2">
                  {card.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className={`h-1 ${card.color} rounded-full mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Learning Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bloom Lifecycle Animation */}
          <Card className="overflow-hidden bg-gradient-nature animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl text-center">🌱 Bloom Lifecycle</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex justify-center items-center space-x-8 mb-6">
                <div className="text-center animate-fade-in-up">
                  <div className="text-4xl mb-2">🌱</div>
                  <p className="text-sm">Bud Formation</p>
                </div>
                <div className="text-2xl text-muted-foreground animate-gentle-sway">→</div>
                <div className="text-center animate-fade-in-up [animation-delay:0.5s]">
                  <div className="text-4xl mb-2">🌸</div>
                  <p className="text-sm">Full Bloom</p>
                </div>
                <div className="text-2xl text-muted-foreground animate-gentle-sway">→</div>
                <div className="text-center animate-fade-in-up [animation-delay:1s]">
                  <div className="text-4xl mb-2">🍃</div>
                  <p className="text-sm">Seed Development</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Temperature and daylight trigger each stage of the blooming process
              </p>
            </CardContent>
          </Card>

          {/* Climate Impact Visualization */}
          <Card className="overflow-hidden bg-gradient-earth text-primary-foreground animate-slide-in-left [animation-delay:0.2s]">
            <CardHeader>
              <CardTitle className="text-2xl text-center">🌍 Climate Impact</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>1970s Average Bloom Date</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-primary-foreground/50 rounded" />
                    <span className="text-sm">Day 100</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>2020s Average Bloom Date</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-bloom-pink rounded animate-bloom-grow" />
                    <span className="text-sm">Day 85</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
                  <p className="text-sm text-center opacity-90">
                    <strong>15 days earlier</strong> on average - that's 3 weeks of spring arriving sooner!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Help Track Blooms in Your Area
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Citizen scientists like you can contribute valuable data by reporting bloom observations 
            in your local area through various monitoring programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg">
              📱 Join Citizen Science
            </Button>
            <Button variant="outline" size="lg">
              📚 Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;