import React, { useState, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube, FaHome } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import './NavbarStyles.css';
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TfiLayoutSlider } from "react-icons/tfi";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [isAudioAllowed, setIsAudioAllowed] = useState(false);
    const audioRef = useRef(null);

    const handleNav = () => setNav(!nav);

    const enableAudio = () => {
        setIsAudioAllowed(true);
        document.removeEventListener('click', enableAudio);
    };

    useEffect(() => {
        document.addEventListener('click', enableAudio);
        return () => {
            document.removeEventListener('click', enableAudio);
        };
    }, []);

    useEffect(() => {
        audioRef.current = new Audio('/sounds/click.mp3');
    }, []);

    const playAudio = () => {
        if (isAudioAllowed && audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log('Audio play failed:', error);
            });
        }
    };

    return (
      <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
        <div className={nav ? "logo dark" : "logo"}>
          <h2 style={{ color: "black" }}>
            <RouterLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              NATURE.
            </RouterLink>
          </h2>
        </div>
        <ul className="nav-menu">
          <li onMouseEnter={playAudio} className="nav-item">
            <RouterLink to="/home">
              <FaHome />
              <span className="nav-text">Home</span>
            </RouterLink>
          </li>
          <li onMouseEnter={playAudio} className="nav-item">
            <RouterLink to="/destinations">
              <FaLocationDot />
              <span className="nav-text">Destinations</span>
            </RouterLink>
          </li>
          <li onMouseEnter={playAudio} className="nav-item">
            <RouterLink to="/carousel">
              <TfiLayoutSlider />
              <span className="nav-text">My Slider</span>
            </RouterLink>
          </li>
          <li onMouseEnter={playAudio} className="nav-item">
            <RouterLink to="/search">
              <IoCall />
              <span className="nav-text">Contact us</span>
            </RouterLink>
          </li>
          <li onMouseEnter={playAudio} className="nav-item">
            <RouterLink to="/selects">
              <MdOutlineMonochromePhotos />
              <span className="nav-text">Views</span>
            </RouterLink>
          </li>
        </ul>
        <div className="nav-icons">
          <BiSearch
            onMouseEnter={playAudio}
            className="icon"
            style={{ marginRight: "1rem" }}
          />
          <BsPerson onMouseEnter={playAudio} className="icon" />
        </div>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <HiOutlineMenuAlt4 className="icon" />
          ) : (
            <AiOutlineClose style={{ color: "#000" }} className="icon" />
          )}
        </div>
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
            <li onMouseEnter={playAudio}>
              <RouterLink to="/home">Home</RouterLink>
            </li>
            <li onMouseEnter={playAudio}>
              <RouterLink to="/destinations">Destinations</RouterLink>
            </li>
            <li onMouseEnter={playAudio}>
              <RouterLink to="/carousel">Carousel</RouterLink>
            </li>
            <li onMouseEnter={playAudio}>
              <RouterLink to="/search">Book</RouterLink>
            </li>
            <li onMouseEnter={playAudio}>
              <RouterLink to="/selects">Views</RouterLink>
            </li>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-icons">
              <button>Search</button>
              <button>Account</button>
            </div>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaPinterest className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
