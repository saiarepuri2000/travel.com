import React from 'react';
import '../App.css';
import './HeroSection.css';
import Search from "./Search";
function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>The Greatest Outdoors</h1>
        <p>Wishlists curated by Travel.com</p>
      <div className='hero-btns'>
        <Search/>
      </div>
    </div>
  );
}

export default HeroSection;