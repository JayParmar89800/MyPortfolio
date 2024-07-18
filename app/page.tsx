import Hero from "@/components/Hero";
import HeroContent from "@/components/HeroContent";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
        <Hero />
        <HeroContent />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="resume">
        <Resume />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
