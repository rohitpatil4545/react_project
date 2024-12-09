// Button2.js

// import React from 'react';
// import { Button } from '@mui/material';

// function Button2({ text, onClicked }) {
//   const handleClick2 = () => {
//     onClicked ? onClicked() : alert("Clicked button is 2 :");
//   };

//   return (
//     <div>
//       <Button variant='contained' color='primary' onClick={handleClick2}>
//         {text}
//       </Button>
//     </div>
//   );
// }

// export default Button2;

import React from "react";
import { Button } from "@mui/material";
function Button2({ text1, text2, onClicked1, onClicked2 }) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClicked1}>
        {text1}
      </Button>
      <Button variant="contained" color="primary" onClick={onClicked2}>
        {text2}
      </Button>
    </div>
  );
}

export default Button2;
