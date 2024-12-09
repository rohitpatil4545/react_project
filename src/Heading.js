import React from 'react';
import { Typography } from '@mui/material';  // Updated to @mui/material

const Heading = ({ text, color }) => {
  const style = {
    color: color || 'black',  // Fallback to 'black' if no color is passed
  };

  return (
    <Typography variant='h1' style={style}>
      {text}
    </Typography>
  );
};

export default Heading;
