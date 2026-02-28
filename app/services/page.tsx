import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesContent } from "@/components/services-content";

export const metadata = {
  title: "Services | SportTechies",
  description:
    "Explore our sports technology solutions and software development services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-svh bg-background pt-16">
        <ServicesContent />
      </main>
      {/* <Footer /> */}
    </>
  );
}
