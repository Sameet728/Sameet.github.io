
import axios from 'axios';
import './App.css'
import LandingBody from './components/LandingBody'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Preloader from './components/Preloader';

function App() {
  const [loading,setLoading]=useState(1);

  const webData = async () => {
    try {
      const response = await axios.get('https://sameetpisal.vercel.app/'); 
      const response2 = await axios.get('https://sameetpisal.vercel.app/'); 
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.log(err)
     
    }
  };

  useEffect(() => {
    webData();
  }, []);

  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Show button after 300px scroll
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  // Adding scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
 <Preloader loading={loading} />
 <Navbar  loading={loading} />
    <LandingBody  />
    {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <FaArrowUp size={20} />   
        </button>
      )}  
    </>
  )
}

export default App
