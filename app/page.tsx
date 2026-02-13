import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LandingAbout from "./components/LandingAbout";
import ServicesCircleSlider from "./components/ServicesUi";
import { Contact } from "lucide-react";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <LandingAbout/>
      <ServicesCircleSlider/>
      <ContactForm/>
      <Footer/>
    </>
  );
}
