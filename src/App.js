import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={
          <>
            <Hero />
            <Footer />
          </>
        } />
        
        <Route path='/destinations' element={
          <>
            <Destinations />
            <Footer />
          </>
        } />
        <Route path='/carousel' element={
          <>
            <ImgCarousel />
            <Footer />
          </>
        } />
        <Route path='/selects' element={
          <>
            <Selects />
            <Footer />
          </>
        } />
        <Route path="/search" element={
          <>
            <Search />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
