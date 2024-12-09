import React, { useState } from "react";
import { Paper, Button, TextField, Typography } from "@mui/material";

function AgeChecker() {
  const [age, setage] = useState("");
  const [message, setmessage] = useState("");

  const handleAgeChecker = (event) => {
    setage(event.target.value);
  };

  const checkage = () => {
    if (age >= 18) {
      setmessage("You are eligible to access the content");
    } else {
      setmessage("Sorry, you must be at least 18 years old to access the content");
    }
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Age Access</Typography>
        <TextField
          label="Enter your Age"
          type="number"
          value={age}
          onChange={handleAgeChecker}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button onClick={checkage} variant="contained" color="primary">
          Check
        </Button>
        <Typography
          variant="body1"
          style={{
            marginTop: "10px",
          }}
        >
          {message}
        </Typography>
      </Paper>
    </div>
  );
}

export default AgeChecker;
