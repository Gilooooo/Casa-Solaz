import AboutUsSection from "./Components/AboutUsSection";
import AmenitiesSection2nd from "./Components/AmenitiesSection2nd";
import FooterSection from "./Components/FooterSection";
import GallerySection from "./Components/GallerySection";
import HeroSection from "./Components/HeroSection";
import LocationSection from "./Components/LocationSection";
import NavBar from "./Components/NavBar";
import TestimonialSection from "./Components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar/>
      <HeroSection/>
      <AboutUsSection/>
      <AmenitiesSection2nd/>
      <GallerySection/>
      <TestimonialSection/>
      <LocationSection/> 
      <FooterSection/>
    </main>
  );
}
