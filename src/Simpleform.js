import React, { useState } from 'react'; 
import { TextField, Box, Button } from '@mui/material';

const SimpleForm = () => {
    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert(`You submitted: ${inputValue}`);
        setInputValue('');
    };

    return (
        <div>
            <Box alignItems="center"> 
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="Enter text"
                        variant="outlined"  
                        fullWidth            
                        value={inputValue}
                        onChange={handleInputChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button> 
                </form>
            </Box>
        </div>
    );
};

export default SimpleForm;
