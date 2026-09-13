import AboutUsSection from "./Components/AboutUsSection";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar/>
      <HeroSection/>
      <AboutUsSection/>
    </main>
  );
}
