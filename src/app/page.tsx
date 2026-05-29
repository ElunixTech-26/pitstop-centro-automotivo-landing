import About from "./components/about/About";
import FinalCta from "./components/cta/FinalCta";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/header/Navbar";
import Testimonials from "./components/testimonials/Testimonials";
import TrustBar from "./components/authority/TrustBar";
import WhatsAppFloat from "./components/whatsapp/WhatsAppFloat";
import WhyUs from "./components/benefits/WhyUs";
import Services from "./components/services/Services";
import Faq from "./components/faq/Faq";
import CustomProjects from "./components/customProjects/CustomProjects";
 
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <CustomProjects />
        <Testimonials />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
