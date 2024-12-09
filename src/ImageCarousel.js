import React, { useState } from "react";
import "./ImageCarousel.css"; 

const ImageCarousel = () => {
  const images = [
    "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-111741230/111741230.jpg",
    "https://www.hindustantimes.com/ht-img/img/2024/09/23/1600x900/Rohit_Sharma_1727111651846_1727111652237.jpg",
    // "https://wallpapers.com/images/hd/rohit-sharma-cricket-hand-signals-gde7t1b55k2mg4tp.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2024/08/14/76126a6b453d0fdf305063afd35da6c41723657053328936_original.jpg?impolicy=abp_cdn&imwidth=720",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
