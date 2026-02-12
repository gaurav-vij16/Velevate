import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LandingAbout from "./components/LandingAbout";
import ServicesCircleSlider from "./components/ServicesUi";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <LandingAbout/>
      <ServicesCircleSlider/>
    </>
  );
}
