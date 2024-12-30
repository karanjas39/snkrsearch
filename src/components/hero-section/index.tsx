import Image from "next/legacy/image";
import BannerImage from "@/public/banner.jpg";
import SearchInput from "@/components/hero-section/searchInput";
import HeroText from "@/components/hero-section/heroText";

function HeroSection() {
  return (
    <section className="relative w-full h-[400px]">
      <Image
        src={BannerImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <HeroText />
      <SearchInput />
      <div className="absolute z-0 inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
    </section>
  );
}

export default HeroSection;
