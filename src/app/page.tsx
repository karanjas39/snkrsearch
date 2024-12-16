import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default HomePage;
