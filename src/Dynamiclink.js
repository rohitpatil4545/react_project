import React from 'react';
import { Box } from '@mui/material';

const Dynamiclink = () => {
  return (
    <div>
      <Box textAlign="center" margin="20px">
        <a 
          href="https://www.google.com" 
          style={{
            color: 'blue', 
            textDecoration: 'underline', 
            cursor: 'pointer', 
            marginBlock: '10px'
          }}
        >
          Go To Link
        </a>  
        </Box> 
        <Box>
        <a href="https://www.amazon.in/" 
        style={{
            color:'blue', textDecoration:'underline', cursor:'pointer',marginBlock:'10px'
        }}
        >Go to second link</a>
      </Box>
    </div> 
  );
}

export default Dynamiclink;
