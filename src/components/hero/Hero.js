import React, { useState } from 'react';
import './HeroStyles.css';
import { AiOutlineSearch, AiOutlineAudio, AiOutlineAudioMuted } from 'react-icons/ai'; 
import Video from '../../assets/background.mp4';
import destinationsData from './destinations.json';
import audioFile from '../../assets/birds-19624.mp3';

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [isMuted, setIsMuted] = useState(false); // Gjendja për menaxhimin e audios

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const results = destinationsData.destinacionet.filter((destination) =>
      destination.lokacioni.toLowerCase().startsWith(searchTerm)
    );
    setFilteredDestinations(results);
  };

  const handleAudioToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Kërko destinacionet e ofruara nga ne</h1>
        <form className="form">
          <div>
            <input id='inp'
              type="text"
              placeholder="Search Destinations"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>        
        </form>
         {searchTerm && filteredDestinations.length > 0 && (
          <div className="search-results"> 
          <ul>
            {filteredDestinations.map((destination) => (
              <li key={destination.lokacioni}>{destination.lokacioni}</li>
            ))}
          </ul>
        </div>
        )}
        
      </div>
      <button className="audio-toggle-button" onClick={handleAudioToggle}>
          {isMuted ? <AiOutlineAudioMuted size={24} /> : <AiOutlineAudio size={24} />}
        </button>
      <audio autoPlay loop muted={isMuted}>
        <source src={audioFile} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Hero;
