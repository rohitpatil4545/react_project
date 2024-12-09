// import React from 'react';
// import { Typography } from '@mui/material';

// function Greeting3() {
//   const currentTime = new Date().getHours();
//    let greetingMessage;

//   if (currentTime >= 5 && currentTime < 12) {
//     greetingMessage = 'Good Morning';
//   } else if (currentTime >= 12 && currentTime < 18) {
//     greetingMessage = 'Good Afternoon';
//   } else {
//     greetingMessage = 'Good Evening';
//   }

//   return (
//     <Typography variant='h4' align='center' style={{ marginTop: '20px' }}>
//       {greetingMessage}
//     </Typography>
//   );
// }

// export default Greeting3; 

// import React from 'react'
// import { Typography } from '@mui/material';
// const Greeting3 = () => {
//     let Display; 
//     let a=parseInt(prompt("Enter the number: "));
//      if (a%2==0)
//      {
//         Display="Even";
//      }
//      else 
//      {
//         Display='Odd';
//      }
//   return (
//     <Typography variant='h3' textAlign={'center'}  >
//         {Display}
//     </Typography>
//   )
// }

// export default Greeting3  

import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';

const Greeting3 = () => {
  const [number, setNumber] = useState('');
  const [display, setDisplay] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCheckNumber = () => {
    const parsedNumber = parseInt(number);
    if (!isNaN(parsedNumber)) {
      setDisplay(parsedNumber % 2 === 0 ? 'Even' : 'Odd');
    } else {
      setDisplay('Please enter a valid number');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <TextField label="Enter a number" variant="outlined"value={number}onChange={handleInputChange}/>
      <Button variant="contained"color="primary" onClick={handleCheckNumber}style={{ marginLeft: '10px' }}>
        Enter
      </Button>
      <Typography variant="h4" style={{ marginTop: '20px' }}>
        {display}
      </Typography>
    </div>
  );
};

export default Greeting3;

