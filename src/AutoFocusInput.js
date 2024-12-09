import { TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const AutoFocusInput = () => { 
    var inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus ();
    },[]) ;
  return (
    <div>
           <TextField 
            label='Enter Anything'
            variant='outlined'
            inputRef={inputRef}
           />
    </div>
  )
}

export default AutoFocusInput