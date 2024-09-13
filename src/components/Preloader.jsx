import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Import the updated CSS file

function Preloader({ loading }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000); // Matches the duration of the animation
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div
      className={`preloader ${loading ? '' : 'preloader-wrapper'} ${animate ? 'preloader-hidden' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="wrapper">
        <div className="box-wrap">
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
          <div className="box five"></div>
          <div className="box six"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
  