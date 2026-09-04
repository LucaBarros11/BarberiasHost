import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderStory from "@/components/FounderStory";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import LocationHours from "@/components/LocationHours";
import BookCta from "@/components/BookCta";
import Footer from "@/components/Footer";
import LeatherDivider from "@/components/ui/LeatherDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LeatherDivider />
        <FounderStory />
        <LeatherDivider />
        <Services />
        <Team />
        <LeatherDivider />
        <Testimonials />
        <LocationHours />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
