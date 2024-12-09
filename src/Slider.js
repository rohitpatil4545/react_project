import React from 'react';
import { Carousel } from 'antd'; 

const Slider = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Carousel  autoplay arrows dots>
        <div>
          <img 
            src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-111741230/111741230.jpg"
            alt="image-1"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img 
            src="https://www.hindustantimes.com/ht-img/img/2024/09/23/1600x900/Rohit_Sharma_1727111651846_1727111652237.jpg"
            alt="image-2"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img 
            src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/08/14/76126a6b453d0fdf305063afd35da6c41723657053328936_original.jpg?impolicy=abp_cdn&imwidth=720"
            alt="image-3"
            style={{ width: '100%', height: 'auto' }}
          />
        </div> 
        
      </Carousel>
    </div>
  );
};

export default Slider;
