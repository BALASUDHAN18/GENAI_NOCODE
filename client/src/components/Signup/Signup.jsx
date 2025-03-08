import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import user_icon from '../../assets/icon_signup/person.png';
import email_icon from '../../assets/icon_signup/email.png';
import password_icon from '../../assets/icon_signup/password.png';

const SignUp = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    alert('Signup Successful!');
    navigate('/');
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User" />
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        
        <div className="input">
          <img src={email_icon} alt="Email" />
          <input 
            type="email" 
            name="email"
            placeholder="Email ID" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        
        <div className="input">
          <img src={password_icon} alt="Password" />
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="Confirm Password" />
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirm Password" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>Signup</button>
          <Link to="/SignIn">
            <button className="submit">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
