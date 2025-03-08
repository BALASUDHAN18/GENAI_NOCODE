import React, { useEffect } from 'react';
// import sharevideo from '../assets/shareVideo.mp4';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@react-oauth/google';
// import { gapi } from 'gapi-script';
import { jwtDecode } from 'jwt-decode';
import { client, urlFor } from '../Client.js';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const userinfo = jwtDecode(response.credential);
    const userImage = userinfo.picture;
    const profileObj = {
      _id: userinfo.sub,
      name: userinfo.name,
      email: userinfo.email,
      image: userImage,
    };
    localStorage.setItem('user', JSON.stringify(profileObj));
    const doc = {
      _id: userinfo.sub,
      _type: 'user',
      username: userinfo.name,
      image: userImage,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <div className='Signup__Container'>
      <div className='Signup__Form'>
        {/* <video
          src={sharevideo}
          type='video/mp4'
          autoPlay
          muted
          controls={false}
          loop
          className='w-full h-full object-cover'
        /> */}
        <div className='Signup__Button'>
          <div className='Signup__Google'>
            <GoogleOAuthProvider
              clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
