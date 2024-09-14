import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    alert("Reminder: Alcohol is bad for your health. Please avoid alcohol.");
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
