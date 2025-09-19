import HeroSection from "@/components/HeroSection";
import GlobalMapSection from "@/components/GlobalMapSection";
import BloomTrendsSection from "@/components/BloomTrendsSection";
import LocalPredictionTool from "@/components/LocalPredictionTool";
import EducationalSection from "@/components/EducationalSection";
import NASADataSection from "@/components/NASADataSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GlobalMapSection />
      <BloomTrendsSection />
      <LocalPredictionTool />
      <EducationalSection />
      <NASADataSection />
      <Footer />
    </div>
  );
};

export default Index;
