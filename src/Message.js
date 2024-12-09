// Default props : 

import React, { Fragment } from 'react'
import {Paper, Typography} from '@mui/material';
function Message({message}) { 
    const defaultMessage='Default Message' ;
  return (
    <React.Fragment>
         <Paper elevation={3} style={{padding:'20px', textAlign:'center'}}>
            <Typography variant='body1' >{ message|| defaultMessage}</Typography>
         </Paper>
    </React.Fragment>
  )
}

export default Message