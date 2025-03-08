import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logos/GENERATIVE_AI.svg';
import Search from '../../assets/Icons/Search.svg';
import { fetchUser } from '../../utils/fetchUser';
import { userQuery } from '../../utils/data';
import { client } from '../../../Client';
const Header = () => {
  const [user, setUser] = useState(null);
  // const [toggleSideBar,setToggleSideBar] = useState(false);
  const userInfo = fetchUser();
  useEffect(() => {
    const query = userQuery(userInfo?._id);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);
  return (
    <div className='Header__Container'>
      <div className='Header__Left'>
        <img src={Logo} alt='Generative_AI' />
      </div>
      <div className='Header__Middle'>
        <input
          className='Header__input'
          placeholder='What do you want to automate?'
        />
        {/* <img src={Search} alt="Search-Icon" /> */}
      </div>
      <div className='Header__Right'>
        <Link to={`SignIn`}>
          <button className='Header__SignIn'>SignIn</button>
        </Link>
        <Link to={`Signup`}>
          <button className='Header__Signin'>SignUp</button>
        </Link>

        <Link to={`user-profile/${user?._id}`}>
          <img
            src={user?.image}
            alt='profile'
            className='Header__Profile'
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Header;
