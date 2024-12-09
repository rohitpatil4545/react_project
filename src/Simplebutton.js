import React from 'react';

const SimpleButton = (props) => { 
    const { text, color, onClick } = props; 
    const buttonStyle = {
        backgroundColor: color,
        padding: '10px 20px',
        borderRadius: '5px', 
        cursor: 'pointer'
    };

    return (
        <div> 
            <button style={{...buttonStyle}} onClick={onClick}>{text}</button> 
        </div>
    );
};

export default SimpleButton;
