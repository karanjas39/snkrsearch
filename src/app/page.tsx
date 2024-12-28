import BrandSection from "@/components/brand-section";
import HeroSection from "@/components/hero-section";
import MostSearched from "@/components/most-searched";
import Navbar from "@/components/navbar";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <MostSearched />
      <BrandSection />
    </div>
  );
}

export default HomePage;
