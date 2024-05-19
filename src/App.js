import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destinations from './components/destinations/Destinations'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgCarousel from './components/carousel/ImgCarousel';




function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <ImgCarousel/>
    </div>
  );
}

export default App;
