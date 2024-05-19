import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destinations from './components/destinations/Destinations'
import Search from './components/search/Search';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
    </div>
  );
}

export default App;
