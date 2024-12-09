import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';  

const Charactercounter = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='character-counter'>
      <TextField 
        label="Enter text"
        multiline
        rows={4}
        variant="outlined" 
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
      />
      <Typography variant="body1" className="character-counter">
        Character count: {inputValue.length}
      </Typography>
    </div>
  );
};

export default Charactercounter;
