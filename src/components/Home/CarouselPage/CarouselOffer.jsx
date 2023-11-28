import One from "./../../../assets/offer/25%off-min.JPG";
import Two from "./../../../assets/offer/5000Coins-min.JPG";
import Three from "./../../../assets/offer/Happy Birthday-min.JPG";
import Four from "./../../../assets/offer/vivek-min.JPG";

import Carousel from "react-bootstrap/Carousel";
// import carouselpage1 from '../../../assets/CarouselPageImage/carouselpage1.jpg';
// import carouselpage2 from '../../../assets/CarouselPageImage/carouselpage2.jpg';
// import carouselpage3 from '../../../assets/CarouselPageImage/carouselpage3.jpg';

const offer = [
  {
    id: 1,
    imageSrc: One,
  },
  {
    id: 2,
    imageSrc: Two,
  },
  {
    id: 3,
    imageSrc: Three,
  },
  {
    id: 4,
    imageSrc: Four,
  },
];

function CarouselOffer() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={carouselpage1}
            src={Three}
            alt="First slide"
            style={{ width: 1080, height: 720 }}
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            // src={carouselpage2}
            src={Two}
            alt="Second slide"
            style={{ width: 1080, height: 720 }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={carouselpage3}
            src={Three}
            alt="Third slide"
            style={{ width: 1080, height: 720 }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={carouselpage3}
            src={Four}
            alt="Third slide"
            style={{ width: 1080, height: 720 }}
          />
          <Carousel.Caption>
            <h3>Four slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default CarouselOffer;
