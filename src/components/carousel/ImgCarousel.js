import React, { useRef, useState } from "react";
import "./ImgCarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import audioFile from '../../assets/birds-19624.mp3';


import Rugove1 from "../../assets/Rugove1.jpg"
import Rugove2 from "../../assets/Rugove2.jpg"
import Rugove3 from "../../assets/Rugove3.jpg"

import Erenik1 from "../../assets/Erenik1.jpg"
import Erenik2 from "../../assets/Erenik2.jpg"
import Erenik3 from "../../assets/Erenik3.jpg"

import Decan1 from "../../assets/Decan1.jpg"
import Decan2 from "../../assets/Decan2.jpg"
import Decan3 from "../../assets/Decan3.jpg"

import Rudoke1 from "../../assets/Rudoke1.jpg"
import Rudoke2 from "../../assets/Rudoke2.jpg"
import Rudoke3 from "../../assets/Rudoke3.jpg"

import Valbone1 from "../../assets/Valbone1.jpg"
import Valbone2 from "../../assets/Valbone2.jpg"
import Valbone3 from "../../assets/Valbone3.jpg"

import BjeshkaGrebajes1 from "../../assets/BjeshkaGrebajes1.jpg"
import BjeshkaGrebajes2 from "../../assets/BjeshkaGrebajes2.jpg"
import BjeshkaGrebajes3 from "../../assets/BjeshkaGrebajes3.jpg"

function ImgCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (carouselRef.current) {
      const nextIndex = (currentIndex + 1) % 18; 
      setCurrentIndex(nextIndex);
      carouselRef.current.moveTo(nextIndex);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const prevIndex = (currentIndex - 1 + 18) % 18; 
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
          <img src={Rugove1} alt="Rugove" />
        </div>
        <div className="slider-item">
          <img src={Rugove2} alt="Rugove" />
        </div>
        <div className="slider-item">
          <img src={Rugove3} alt="Rugove" />
        </div>

        <div className="slider-item">
          <img src={Erenik1} alt="Erenik" />
        </div>
        <div className="slider-item">
          <img src={Erenik2} alt="Erenik" />
        </div>
        <div className="slider-item">
          <img src={Erenik3} alt="Erenik" />
        </div>

        <div className="slider-item">
          <img src={Valbone1} alt="Valbone" />
        </div>
        <div className="slider-item">
          <img src={Valbone2} alt="Valbone" />
        </div>
        <div className="slider-item">
          <img src={Valbone3} alt="Valbone" />
        </div>

        <div className="slider-item">
          <img src={Decan1} alt="Decan" />
        </div>
        <div className="slider-item">
          <img src={Decan2} alt="Decan" />
        </div>
        <div className="slider-item">
          <img src={Decan3} alt="Decan" />
        </div>

        <div className="slider-item">
          <img src={BjeshkaGrebajes1} alt="BjeshkaGrebajes" />
        </div>
        <div className="slider-item">
          <img src={BjeshkaGrebajes2} alt="BjeshkaGrebajes" />
        </div>
        <div className="slider-item">
          <img src={BjeshkaGrebajes3} alt="BjeshkaGrebajes" />
        </div>

        <div className="slider-item">
          <img src={Rudoke1} alt="Rudoke" />
        </div>
        <div className="slider-item">
          <img src={Rudoke2} alt="Rudoke" />
        </div>
        <div className="slider-item">
          <img src={Rudoke3} alt="Rudoke" />
        </div>
        
      </Carousel>
      <button onClick={handlePrev} id="prev" className="custom-arrow custom-prev"></button>
      <button onClick={handleNext} className="custom-arrow custom-next"></button>
      <audio autoPlay loop muted={true}>
                <source src={audioFile} type="audio/mp3" />
        </audio>
    </div>
  );
}

export default ImgCarousel;
