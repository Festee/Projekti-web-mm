import React, { useRef, useState, useEffect } from "react";
import "./ImgCarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineAudio, AiOutlineAudioMuted } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import audioFile from '../../assets/birds-19624.mp3';

import Rugove1 from "../../assets/Rugove1.jpg";
import Rugove2 from "../../assets/Rugove2.jpg";
import Rugove3 from "../../assets/Rugove3.jpg";

import Erenik1 from "../../assets/Erenik1.jpg";
import Erenik2 from "../../assets/Erenik2.jpg";
import Erenik3 from "../../assets/Erenik3.jpg";

import Decan1 from "../../assets/Decan1.jpg";
import Decan2 from "../../assets/Decan2.jpg";
import Decan3 from "../../assets/Decan3.jpg";

import Rudoke1 from "../../assets/Rudoke1.jpg";
import Rudoke2 from "../../assets/Rudoke2.jpg";
import Rudoke3 from "../../assets/Rudoke3.jpg";

import Valbone1 from "../../assets/Valbone1.jpg";
import Valbone2 from "../../assets/Valbone2.jpg";
import Valbone3 from "../../assets/Valbone3.jpg";

import BjeshkaGrebajes1 from "../../assets/BjeshkaGrebajes1.jpg";
import BjeshkaGrebajes2 from "../../assets/BjeshkaGrebajes2.jpg";
import BjeshkaGrebajes3 from "../../assets/BjeshkaGrebajes3.jpg";

function ImgCarousel() {
  const carouselRef = useRef(null);
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

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

  const handleAudioToggle = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

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
        {[Rugove1, Rugove2, Rugove3, Erenik1, Erenik2, Erenik3, Decan1, Decan2, Decan3, Rudoke1, Rudoke2, Rudoke3, Valbone1, Valbone2, Valbone3, BjeshkaGrebajes1, BjeshkaGrebajes2, BjeshkaGrebajes3].map((image, index) => (
          <div className="slider-item" key={index}>
            <LazyLoadImage
              src={image}
              alt={`Slide ${index}`}
              effect="blur"
            />
          </div>
        ))}
      </Carousel>
      
      <button onClick={handlePrev} className="custom-arrow custom-prev"></button>
      <button onClick={handleNext} className="custom-arrow custom-next"></button>
      <button className="audio-toggle-buttoni" onClick={handleAudioToggle}>
        {isMuted ? <AiOutlineAudioMuted size={24} /> : <AiOutlineAudio size={24} />}
      </button>
      <audio ref={audioRef} autoPlay loop>
        <source src={audioFile} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default ImgCarousel;
