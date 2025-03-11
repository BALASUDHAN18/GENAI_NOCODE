import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUser } from './utils/fetchUser';
import MainSection from './components/MainSection/MainSection';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SIgnup';
import Workflows from './components/Workflows/Workflows';
import Settings from './components/Settings/Settings';
import Notes from './components/Notes/Notes';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();
    if (!user) {
      navigate('/Signup', { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainSection />} />
      <Route path='SignIn' element={<SignIn />} />
      <Route path='Signup' element={<SignUp />} />
      <Route path='workflow' element={<Workflows />} />
      <Route path='settings' element={<Settings />} />
      {/* <Route path='notes' element={<Notes />}/> */}
    </Routes>
  );
};



export default App;
