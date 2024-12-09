import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

function Checkboxdisplay() { 
    const [ischecked, setchecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setchecked(event.target.checked);
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={ischecked} 
                        onChange={handleCheckboxChange}  
                        color='primary' 
                    />
                } 
                label='Check this box'
            />
            <Typography>
                {ischecked ? 'Checkbox is checked' : 'Checkbox is unchecked'}
            </Typography>
        </div>
    );
}

export default Checkboxdisplay;
