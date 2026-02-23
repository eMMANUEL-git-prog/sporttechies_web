import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative flex min-h-svh flex-col pt-16">
        <HeroSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
