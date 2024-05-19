import React, { useRef, useState } from "react";
import "./ImgCarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";

function ImgCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (carouselRef.current) {
      const nextIndex = (currentIndex + 1) % 3; 
      setCurrentIndex(nextIndex);
      carouselRef.current.moveTo(nextIndex);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const prevIndex = (currentIndex - 1 + 3) % 3; 
      setCurrentIndex(prevIndex);
      carouselRef.current.moveTo(prevIndex);
    }
  };

  return (
    <div name='carousel' className="container">
      <Carousel
        ref={carouselRef}
        className="carousel"
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
      >
        <div className="slider-item">
          <img src={BoraBora} alt="Bora Bora" />
        </div>
        <div className="slider-item">
          <img src={BoraBora2} alt="Bora Bora 2" />
        </div>
        <div className="slider-item">
          <img src={Maldives} alt="Maldives" />
        </div>
      </Carousel>
      <button onClick={handlePrev} className="custom-arrow custom-prev"></button>
      <button onClick={handleNext} className="custom-arrow custom-next"></button>
    </div>
  );
}

export default ImgCarousel;
