// import { TextField, Typography , Button} from '@mui/material'
// import React, { useRef, useState } from 'react'

// const PasswordMatchValiation = () => { 
//      const passwordRef=useRef(null); 
//      const conformRef=useRef(null); 
//      const [message,setmessage]=useState('');
    
//      const handlevalidation=()=>{
//         const passwordvaluevalidation=passwordRef.current.value;
//      const conformpasswordvalidation= conformRef.current.value;
//      if(passwordvaluevalidation!==conformpasswordvalidation) 
//      {
//          setmessage("password don't match");
//      }
//     else 
//     {
//         setmessage("Correct Password :");
//     }
//      }
//   return (
//     <div> 

//         <TextField  
//           label="Password"
//           type='password'
//           inputRef={passwordRef} 
//           variant='outlined' 
//           style={{marginLeft:'5px'}}
//         /> 

        
//        <TextField   style={{marginLeft:'5px'}}
//           label="conform password"
//           type='password'
//           inputRef={conformRef} 
//           variant='outlined'
//         /> 
//         <Button style={{marginLeft:'5px'}}
//           variant='contained' 
//           onClick={handlevalidation} 
//         >Check password</Button>
//         <Typography >
//              {message?'red':'green'}
//         </Typography>
//     </div>
//   )
// }

// export default PasswordMatchValiation 

import { TextField, Typography, Button } from '@mui/material';
import React, { useRef, useState } from 'react';

const PasswordMatchValidation = () => {
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleValidation = () => {
    const passwordValue = passwordRef.current.value;
    const confirmPasswordValue = confirmRef.current.value;

    if (passwordValue !== confirmPasswordValue) {
      setMessage("Passwords don't match");
      setMessageColor('red'); 
    } else {
      setMessage('Passwords match');
      setMessageColor('green'); 
    }
  };

  return (
    <div>
      <TextField
        label="Password"
        type="password"
        inputRef={passwordRef}
        variant="outlined"
        style={{ marginLeft: '5px' }}
      />

      <TextField
        label="Confirm Password"
        type="password"
        inputRef={confirmRef}
        variant="outlined"
        style={{ marginLeft: '5px' }}
      />

      <Button
        variant="contained"
        onClick={handleValidation}
        style={{ marginLeft: '5px' }}
      >
        Check Password
      </Button>

      <Typography style={{ color: messageColor, marginTop: '10px' }}>
        {message}
      </Typography>
    </div>
  );
};

export default PasswordMatchValidation;
