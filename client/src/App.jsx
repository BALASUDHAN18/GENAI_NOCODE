import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUser } from './utils/fetchUser';
import MainSection from './components/MainSection/MainSection';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SIgnup';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();
    if (!user) {
      navigate('/SignIn', { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainSection />} />
      <Route path='SignIn' element={<SignIn />} />
      <Route path='Signup' element={<SignUp />} />
    </Routes>
  );
};

export default App;
