import { TextField } from '@mui/material';
import React, { useState } from 'react'

const InteractiveInput = ({initialinput}) => {  
    const[inputValue,setInputValue]=useState(initialinput) 
    const handleeventchange =(event)=>{
        setInputValue(event.target.value);
    }
  return (
    <div>
        <TextField 
         label="type here" variant='outlined' fullWidth value={inputValue} onChange={handleeventchange}
        />
    </div> 
  )
}

export default InteractiveInput