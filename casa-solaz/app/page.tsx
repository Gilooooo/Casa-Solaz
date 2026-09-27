import AboutUsSection from "./Components/AboutUsSection";
import AmenitiesSection from "./Components/AmenitiesSection";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import OfferSection from "./Components/OfferSection";
import OurOfferingSection from "./Components/OurOfferings";
import TestimonialSection from "./Components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar/>
      <HeroSection/>
      <AboutUsSection/>
      <OurOfferingSection/>
      <AmenitiesSection/>
      <OfferSection/>
      <TestimonialSection/>
      <FooterSection/>
    </main>
  );
}
