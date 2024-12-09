import React, { useState } from 'react';
import { Paper, Button, TextField, Alert as MuiAlert } from '@mui/material';

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const buttonevent = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <Paper elevation={3} style={{ margin: '20px', padding: '20px', marginLeft: '5px' }}>
        <TextField
          style={{ marginLeft: '5%' }}
          margin="normal"
          label="Name"
          variant="standard"
          type="text"
        />
        <TextField
          style={{ marginLeft: '5%' }}
          margin="normal"
          label="Phone"
          variant="standard"
          type="number"
        />
        <TextField
          style={{ marginLeft: '5%' }}
          margin="normal"
          label="Email"
          variant="standard"
          type="email"
        />
        <Button
          variant="contained"
          style={{ display: 'flex', marginLeft: '5%', marginTop: '10px' }}
          onClick={buttonevent}
        >
          Submit
        </Button>
        {showAlert && <MuiAlert severity="success">Your Form is Submitted Sucessfully</MuiAlert>}
      </Paper>
    </div>
  );
};

export default AlertComponent;
