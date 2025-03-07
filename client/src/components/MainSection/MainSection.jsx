import React from 'react'
import './MainSection.css'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../HeroSection/HeroSection'
const MainSection = () => {
  return (
    <div className='MainSection__container'>
        <NavBar />
        <HeroSection />
    </div>
  )
}

export default MainSection