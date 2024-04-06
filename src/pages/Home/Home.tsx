import Hero from "./Sections/Hero";
import PricingOptions from "./Sections/PricingOptions";
import Section2 from "./Sections/Section-2";
import Services from "./Sections/Services";
import GetStarted from "./Sections/GetStarted";

const Home = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <Services />
      <PricingOptions />
      <GetStarted />
    </>
  );
};

export default Home;
