import React from 'react';
import './MainSection.css';
import NavBar from '../NavBar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../Header/Header';
const MainSection = () => {
  return (
    <div className='MainSection__container'>
      <Header />
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default MainSection;
