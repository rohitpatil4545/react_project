import React, { Component } from 'react';
import { Typography, TextField } from '@mui/material'; 

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValid: true,
    };
  }

  handleEmailChange = (event) => {
    const email = event.target.value;
    const isValid = email.includes('@');
    this.setState({
      email: email,
      isValid: isValid,
    });
  };

  render(){
    const {Name}=this.props;{
    return (
      <div> 
        <h6 style={{margin:'10px'}} >{Name}</h6>
        <TextField
          label="Email Address"
          variant='outlined'
          fullWidth
          value={this.state.email}
          onChange={this.handleEmailChange}
          error={!this.state.isValid}
          helperText={this.state.isValid ? ' ' : 'Invalid email address'}
        />
      </div>
    );
  }
} }

export default FormValidation;
