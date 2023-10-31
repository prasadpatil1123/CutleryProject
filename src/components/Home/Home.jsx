import React from 'react'
import Carouselpage from './CarouselPage/CarouselPage';
import PromoSections from './PromoSections/PromoSections';


function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Carouselpage />
      <PromoSections />
    </div>
  )
}

export default Home