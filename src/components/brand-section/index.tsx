import CustomSection from "../ui/custom-section";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    name: "Crepdogcrew",
    link: "https://crepdogcrew.com/",
  },
  {
    name: "VegNonVeg",
    link: "https://www.vegnonveg.com/",
  },
  {
    name: "Sneaker Plug",
    link: "https://sneakerplug.co.in/",
  },
  {
    name: "Nike",
    link: "https://nike.com/",
  },
  {
    name: "Mainstreet",
    link: "https://marketplace.mainstreet.co.in/",
  },
  {
    name: "Limited Edt",
    link: "https://limitededt.in/",
  },
  {
    name: "Hypefly",
    link: "https://hypefly.co.in/",
  },
  {
    name: "Superkicks",
    link: "https://superkicks.in",
  },
  {
    name: "Foot Locker",
    link: "https://www.footlocker.co.in/",
  },
  {
    name: "GOAT",
    link: "https://www.goat.com/",
  },
  {
    name: "Fight Club",
    link: "https://www.flightclub.com/",
  },
  {
    name: "Hustle Culture",
    link: "https://hustleculture.co.in/",
  },
  {
    name: "NBA Store",
    link: "https://www.nbastore.in/",
  },
  {
    name: "Dawntown",
    link: "https://dawntown.co.in/",
  },
];

function BrandSection() {
  return (
    <CustomSection heading="Our Brands">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </CustomSection>
  );
}

export default BrandSection;
