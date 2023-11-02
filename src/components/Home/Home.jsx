import React from 'react'
import Carouselpage from './CarouselPage/CarouselPage';
import PromoSections from './PromoSections/PromoSections';
import HeroSection from '../Header/HeroSection';


function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Carouselpage />
      <HeroSection />
      <PromoSections />
    </div>
  )
}

export default Home