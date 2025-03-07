import React from 'react'
import './Header.css';
import Logo from '../../assets/Logos/GENERATIVE_AI.svg'
import Search from '../../assets/Icons/Search.svg'
const Header = () => {
  return (
    <div className='Header__Container'>
      <div className='Header__Left'>
        <img src={Logo} alt="Generative_AI" />
      </div>
      <div className='Header__Middle'>
    <input className="Header__input" placeholder="What do you want to automate?" />
    {/* <img src={Search} alt="Search-Icon" /> */}
      </div>
      <div className='Header__Right'>
        <button className='Header__Signup'>
            SignUp
        </button>
        <button className='Header__Signin'>
            SignIn
        </button>
      </div>
    </div>
  )
}

export default Header
