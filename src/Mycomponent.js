import React from 'react'
import proptypes from 'prop-types';
import { Paper ,Typography} from '@mui/material'
function Mycomponent({name,age,email}) { 
  return (
    <div>
        <Paper elevation={4} style={{padding:'20px', textAlign:'center'}}>
         <Typography variant='h6'  >
          MY Component :
         </Typography>   
          <Typography>
             Name: {name} , Age: {age}, Email: {email}
          </Typography>  
        </Paper>
    </div>
  )
} 
Mycomponent.prototype={
    name:proptypes.string.isRequired,
    age:proptypes.number.isRequired,
    email:proptypes.string.isRequired,
}

export default Mycomponent