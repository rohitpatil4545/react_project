import { TextField} from '@mui/material'
import React from 'react'

function Uncontrollcomponent() { 
    const inputRef=React.createRef();
    const handleSubmit=(e)=>{
       e.preventDefault();
       alert('-'+inputRef.current.value);
    }
   return (
    <div> 
        <form onSubmit={handleSubmit} 
         style={{
            marginTop:'10px', 
            marginLeft:'5px'
         }}
        >
          <TextField 
            inputRef={inputRef} 
            label='Type something' 
            variant='outlined' 
          />
          <button type='submit' style={{display:'flex', marginTop:'5px', marginLeft:'5px'}}>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrollcomponent