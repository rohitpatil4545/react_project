import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
const RealTimeClock = () => {
  const [current, setCurrent] = useState(new Date());
                                                                                          
  useEffect(() => {
    const interval = setInterval(() => {   
      setCurrent(new Date());
    }, 1000); 
    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div>
      <Typography variant="h4">
        {current.toLocaleTimeString()}
      </Typography>
    </div>
  );
};

export default RealTimeClock;
