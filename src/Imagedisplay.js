import React from 'react';
const Imagedisplay = ({ imageUrl }) => {
  return (
    <div>
      {
        imageUrl ? (
          <img src={imageUrl} alt="Image" />
        ) : (
          <p>Image not found</p>
        )
      }
    </div>
  );
};

export default Imagedisplay;











