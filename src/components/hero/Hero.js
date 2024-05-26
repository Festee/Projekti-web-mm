import React, { useState } from 'react';
import './HeroStyles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Video from '../../assets/background.mp4';
import destinationsData from './destinations.json';


function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const results = destinationsData.destinacionet.filter((destination) =>
      destination.lokacioni.toLowerCase().startsWith(searchTerm)
    );
    setFilteredDestinations(results);
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
            <input
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
     
    </div>
  );
}

export default Hero;
