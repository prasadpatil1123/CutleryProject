// import React from "react";
import Carouselpage from "./CarouselPage/CarouselPage";
import PromoSections from "./PromoSections/PromoSections";
import ServiceSection from "./ServiceSection/ServiceSection";
import About from "../page/About/About";
import Steps from "../page/Steps/Steps";
// import Contact from "../Contact/Contact";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Carouselpage />
      <ServiceSection />
      <PromoSections />
      <About />
      <Steps/>
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
