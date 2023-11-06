import React from 'react'
import Carouselpage from './CarouselPage/CarouselPage';
import PromoSections from './PromoSections/PromoSections';
import ServiceSection from './ServiceSection/ServiceSection';
import About from '../About/About';
import Contact from '../Contact/Contact';



function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
     
      <Carouselpage />
      <ServiceSection />
      <PromoSections />
      <About />
      <Contact />
    </div>
  )
}

export default Home