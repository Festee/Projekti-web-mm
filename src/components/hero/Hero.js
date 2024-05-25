import React, { useState } from 'react';
import './HeroStyles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Video from '../../assets/maldivesVideo.mp4';
import citiesData from './cities.json';

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const results = citiesData.cities.filter((city) =>
      city.toLowerCase().startsWith(searchTerm)
    );
    setFilteredCities(results);
  };

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
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
         {searchTerm && filteredCities.length > 0 && (
          <div className="search-results"> 
          <ul>
            {filteredCities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
        )}
      </div>
     
    </div>
  );
}

export default Hero;
