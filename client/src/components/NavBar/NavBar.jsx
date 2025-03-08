import React from 'react'
import './NavBar.css';
import Home from '../../assets/NavbarIcons/Home.svg'
import Circle from '../../assets/NavbarIcons/Add_Circle.svg'
import Notes from '../../assets/NavbarIcons/Notes.svg'
import Settings from '../../assets/NavbarIcons/Settings.svg'
import Timeline from '../../assets/NavbarIcons/Timeline.svg'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navBar__container'>
    <div className='navBar__elements'>
    <button>
      <img src={Home} alt="Home" />
    </button>
    <Link to={`workflow`}>
    <button>
      <img src={Circle} alt="Add_Circle" />
    </button></Link>
    <button>
      <img src={Notes} alt="Notes" />
    </button>
    <button>
      <img src={Settings} alt="Settings" />
    </button>
    <button>
      <img src={Timeline} alt="Timeline" />
    </button>
    </div>
    </div>
  )
}

export default NavBar
