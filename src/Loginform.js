import React, { Component } from 'react';
import { TextField, Button, Typography, Snackbar } from '@mui/material';

 class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isValidEmail: true,
      isSnackbarOpen: false,
    };
  }

  handleEmailChange = (event) => {
    const email = event.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    this.setState({
      email: email,
      isValidEmail: isValidEmail,
    });
  };

  handleSnackbarOpen = () => {
    this.setState({
      isSnackbarOpen: true,
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      isSnackbarOpen: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValidEmail) {
      this.handleSnackbarOpen();
    }
  };

  render() {
    return (
      <div>
        <Typography variant="h6">Login Form</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            value={this.state.email}
            onChange={this.handleEmailChange}
            error={!this.state.isValidEmail}
            helperText={this.state.isValidEmail ? "" : "Invalid Email Address"}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={this.state.isSnackbarOpen}
          autoHideDuration={2000} 
          onClose={this.handleSnackbarClose}
          message="Email Submitted"
        />
      </div>
    );
  }
}
 
 export default LoginForm;