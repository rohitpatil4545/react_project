import React, { useState } from 'react';
import { Paper, Typography, Button } from '@mui/material';

function Displaybutton() { 
    const [isLogin, setLogin] = useState(true);
    const [message, setMessage] = useState("");

    const handleButtonClick = () => {
        setLogin(prevMode => !prevMode);
        setMessage(isLogin ? "Login button is clicked" : "Logout button is clicked");
    };

    return (
        <div>
            <Paper elevation={3} style={{ margin: '20px', textAlign: 'center' }}>
                <Typography variant='h6'>
                    Toggle Button 
                </Typography> 
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '10px' }}
                    onClick={handleButtonClick}
                >
                    {isLogin ? 'Login' : 'Logout'}
                </Button>  
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                    {message}
                </Typography>
            </Paper>
        </div>
    );
}

export default Displaybutton;
