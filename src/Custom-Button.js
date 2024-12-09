import React, { useState } from 'react';

const CustomButton = ({ text, backgroundcolor, textcolor }) => {
  const [buttonColor, setButtonColor] = useState(backgroundcolor);

  const handleClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setButtonColor(randomColor);
  };

  return (
    <button
      style={{ backgroundColor: buttonColor, color: textcolor }}
      onClick={handleClick}
    >
      {text}
      </button>
        );
};

export default CustomButton;
