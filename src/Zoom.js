import React from 'react';
import './Zoom.css';
const Zoom = () => {
  return (
    <div className="image-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySu-cDpy7YRnWN8fp5n1m4xgHeCXWrAyT0A&s" 
          alt="image" 
          className="zoom-image"
        />
    </div>
  );
}

export default Zoom;
