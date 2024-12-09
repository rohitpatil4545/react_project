import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, bgcolor, onClick }) => {
  const buttonStyle = {
    backgroundColor: bgcolor  
  };

  return (
    <div> 
      <Button 
        variant="contained" 
        style={buttonStyle} 
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
}

export default CustomButton;
