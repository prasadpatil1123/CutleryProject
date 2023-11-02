import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import carouselpage1 from '../../../assets/CarouselPageImage/carouselpage1.jpg';
// import carouselpage2 from '../../../assets/CarouselPageImage/carouselpage2.jpg';
// import carouselpage3 from '../../../assets/CarouselPageImage/carouselpage3.jpg';
function CarouselPage() {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        // src={carouselpage1}
        src="https://media.istockphoto.com/id/1465927187/photo/knife-fork-and-spoon.jpg?s=612x612&w=0&k=20&c=v4eWtO5wPUjLh-MQCbfcCPJSr9tFM_DhPx0OqnkHAkE="
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
        src="https://media.istockphoto.com/id/522645617/photo/empty-glasses-in-restaurant.jpg?s=612x612&w=0&k=20&c=dYZAvj9xodJG11gyPZhPgFuDrXRgWBerQliKz4jguOg="
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
        src="https://media.istockphoto.com/id/1497707608/photo/kitchen-cutlery-set-spoon-and-fork-set.jpg?s=612x612&w=0&k=20&c=M_38siTVgy8Xua9Omm25RMyezPP76lvqNY7KZvf1leQ="
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