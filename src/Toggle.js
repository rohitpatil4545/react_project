import React, { useState } from 'react';
import { Paper, Button, Typography } from '@mui/material';

function Toggle() { 
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <Paper elevation={3} style={{ margin: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Toggle Message</Typography> 
                <Button variant="contained" color="primary" onClick={toggleMessage}>
                    Toggle
                </Button>
                {showMessage ? <Typography variant="body1">This is your Message</Typography> : null}
            </Paper>
        </div>
    );
}

export default Toggle;
