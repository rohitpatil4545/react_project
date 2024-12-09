import React, { Component } from 'react'
import {Paper,Typography} from '@mui/material';
export default class Studentprofile extends Component {
    constructor(props){
        super(props);
        this.state={
           name:props.name ||"unknown",
           age:props.age || "not found: ",
           major:props.major ||"verify "
        }
    }
  render() {
    return (
      <div>
         <Paper elevation={3} variant='contained' style={{textAlign:'center', padding:"20px"}}>
             <Typography variant='h7'>
                   Student Profile: 
             </Typography> 
             <Typography variant='body1'> 
                 Name:{this.state.name}, Age:{this.state.age},Major:{this.state.major}
             </Typography>
         </Paper>
      </div>
    )
  }
}
