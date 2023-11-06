import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import carouselpage1 from '../../../assets/CarouselPageImage/carouselpage1.jpg';
// import carouselpage2 from '../../../assets/CarouselPageImage/carouselpage2.jpg';
// import carouselpage3 from '../../../assets/CarouselPageImage/carouselpage3.jpg';

let imgs = [
  'https://plus.unsplash.com/premium_photo-1666739032173-d6c21744824b?auto=format&fit=crop&q=80&w=2136&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1676976500593-3dfec0b17754?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1556910096-6f5e72db6803?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
function CarouselPage() {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        // src={carouselpage1}
        src={imgs[0]}
        alt='First slide'
        style={{width:1080, height:720}}
        />
                
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d-block w-100'
        // src={carouselpage2}
        src={imgs[1]}
        alt='Second slide'
        style={{width:1080, height:720}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>        
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d-block w-100'
        // src={carouselpage3}
        src={imgs[2]}
        alt='Third slide'
        style={{width:1080, height:720}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  )
}

export default CarouselPage