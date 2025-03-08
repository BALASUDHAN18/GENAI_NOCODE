import React, { useState } from 'react';
import './NavBar.css';
import Home from '../../assets/NavbarIcons/Home.svg';
import Circle from '../../assets/NavbarIcons/Add_Circle.svg';
import Notes from '../../assets/NavbarIcons/Notes.svg';
import Settings from '../../assets/NavbarIcons/Settings.svg';
import Timeline from '../../assets/NavbarIcons/Timeline.svg';

const NavBar = () => {
  const [isCircleOpen, setIsCircleOpen] = useState(false);

  return (
    <div className='navBar__container'>
      <div className='navBar__elements'>
        <button>
          <img src={Home} alt='Home' />
        </button>
        <div
          className='dropdown-container'
          onMouseEnter={() => setIsCircleOpen(true)}
          onMouseLeave={() => setIsCircleOpen(false)}
        >
          <button className='dropdown-button'>
            <img src={Circle} alt='Add Circle' />
          </button>

          {isCircleOpen && (
            <div className='dropdown-menu'>
              <a href='#'>New Task</a>
              <a href='#'>New Event</a>
              <a href='#'>New Note</a>
            </div>
          )}
        </div>

        <button>
          <img src={Notes} alt='Notes' />
        </button>
        <button>
          <img src={Settings} alt='Settings' />
        </button>
        <button>
          <img src={Timeline} alt='Timeline' />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
