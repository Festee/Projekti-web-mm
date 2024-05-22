import React, { useState, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import './NavbarStyles.css';

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
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>BEACHES.</h2>
            </div>
            <ul className="nav-menu">
                <li onMouseEnter={playAudio}><RouterLink to='/home'>Home</RouterLink></li>
                <li onMouseEnter={playAudio}><RouterLink to='/destinations'>Destinations</RouterLink></li>
                <li onMouseEnter={playAudio}><RouterLink to='/carousel'>Carousel</RouterLink></li>
                <li><RouterLink to='/search'>Book</RouterLink></li>
                <li onMouseEnter={playAudio}><RouterLink to='/selects'>Views</RouterLink></li>
            </ul>
            <div className="nav-icons">
                <BiSearch onMouseEnter={playAudio} className="icon" style={{ marginRight: '1rem' }} />
                <BsPerson onMouseEnter={playAudio} className="icon" />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className="icon" />)}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li onMouseEnter={playAudio}><RouterLink to='/home'>Home</RouterLink></li>
                    <li onMouseEnter={playAudio}><RouterLink to='/destinations'>Destinations</RouterLink></li>
                    <li onMouseEnter={playAudio}><RouterLink to='/carousel'>Carousel</RouterLink></li>
                    <li onMouseEnter={playAudio}><RouterLink to='/search'>Book</RouterLink></li>
                    <li onMouseEnter={playAudio}><RouterLink to='/selects'>Views</RouterLink></li>
                </ul>
                <div className='mobile-menu-bottom'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='social-icons'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
