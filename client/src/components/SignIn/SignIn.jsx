import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { client, urlFor } from '../../../Client';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
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
    <div className='SignIn__Container'>
      <div className='SignIn__Form'>
        <h1>Welcome to GENAI-NOCODE</h1>
        <div className='SignIn__Button'>
          <div className='SignIn__Google'>
            <GoogleOAuthProvider
              clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
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

export default SignIn;
