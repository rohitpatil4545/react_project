import React, { useState } from 'react'
import { TextField, Typography } from '@mui/material';

const Inputdisplaycomponent = () => { 
    const [isinput,setIsinput]=useState('');
    const handleinputchange=(event)=>{
        setIsinput(event.target.value)
    };

  return (
    <div>
       <TextField
          label='Text' 
          name='text'
          variant='outlined'
          fullWidth 
          margin='normal'
          value={isinput}
          onChange={handleinputchange}
       /> 

       <Typography variant='h6' style={{marginTop:'20px'}}>
           Your text :{isinput}
       </Typography>
    </div>
  )
}

export default Inputdisplaycomponent