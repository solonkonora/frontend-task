import Footer from "../../components/footer";
import GenerateSection from "@/components/generate";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <GenerateSection />
      <Footer />
    </main>
  );
}
