// import React from 'react'
// import { Button,TextField } from '@mui/material'
// const DesignProfileCard = () => {
   
//   return (
//     <div>
//         <h5 style={{display:'flex',
//              justifyContent:'center',
//               alignContent:'center'
              
//               }}>User Profile Card</h5> 
//         <img  
//         style={{
//             display:'flex',
//              justifyContent:'center',
//               alignContent:'center',
              
//               width:'20%'
              
//         }}
//         src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ORP/B4034D5B-B9CD-0FDA-A4A4B94A79E70949.jpg" 
//         alt=""
//         /> 
//         <h5  
//            style={{
//             display:'flex',
//              justifyContent:'center',
//               alignContent:'center'
              
//            }}
//         >Dev Dixit</h5> 
//         <p 
//         style={{
//             display:'flex',
//              justifyContent:'center',
//               alignContent:'center'
              
//         }}
//         >CEO & Founder Example </p> 
//         <p 
//         style={{
//             display:'flex',
//              justifyContent:'center',
//               alignContent:'center'
              
//         }}
//         >Harvard University</p> 

//         <button 
//         style={{
//             display:'flex',
//              justifyContent:'center',
//               alignContent:'center'
              
//         }}
//         >Conatact</button>
//      </div>
//   )
// }

// export default DesignProfileCard   ;


// import React from 'react';
// import { Button, TextField } from '@mui/material';

// const DesignProfileCard = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px', 
//         border:'2px solid white', 
//         marginTop:'10%', 
//         backgroundColor:'black' 
        
//       }}
//     >
//       <h5>User Profile Card</h5>
//       <img
//         style={{
//           width: '20%',
//           borderRadius: '50%', // This will make the image circular if it's square
//         }}
//         src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ORP/B4034D5B-B9CD-0FDA-A4A4B94A79E70949.jpg"
//         alt="User Profile"
//       />
//       <h5>Dev Dixit</h5>
//       <p>CEO & Founder Example</p>
//       <p>Harvard University</p>
//       <Button variant="contained" color="primary">
//         Contact
//       </Button>
//     </div>
//   );
// };

// export default DesignProfileCard;  


// import React from 'react';
// import { Button } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import ButtonPopupWindow from './Button-popup-window';
// const DesignProfileCard = () => { 
//     const buttonhandlecanage=()=>{
//              alert("Button is cliked");
//     }
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px', 
//         border: '2px solid white',        // Border width, style, and color
//         borderRadius: '10px',             // Optional: to make the card corners rounded
//         marginTop: '10%', 
//         backgroundColor: 'black',
//         color: 'white',                   // Ensures text is visible on black background
//         width: '300px',                   // Sets a fixed width for the card
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',  // Adds a subtle shadow effect
//         marginLeft: '38%'
//       }}
//     >
//       <h5>User Profile Card</h5>
//       <img
//         style={{
//           width: '50%',                    // Adjusted width for better fit within the card
//           borderRadius: '50%',             // Makes the image circular
//           marginBottom: '15px',            // Adds spacing below the image
//         }}
//         src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ORP/B4034D5B-B9CD-0FDA-A4A4B94A79E70949.jpg"
//         alt="User Profile"
//       />
//       <h5>Rohit patil</h5>
//       <p>CEO & Founder Example</p>
//       <p>Cricket University</p>
      
//       {/* FontAwesome Icons */}
//       <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
//         <FontAwesomeIcon icon={faGoogle} />
//         <FontAwesomeIcon icon={faLinkedinIn} />
//         <FontAwesomeIcon icon={faFacebookF} />
//       </div>

//       <Button variant="contained" color="primary"  
//         onClick={buttonhandlecanage} 

//         <Button-popup-window/>
//       >
//         Contact
//       </Button>
//     </div>
//   );
// };

// export default DesignProfileCard;



import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Buttonwindow from './Buttonwindow';

const DesignProfileCard = () => { 
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    return ( 
      <>  
                  {isPopupOpen && <Buttonwindow />}

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px', 
                border: '2px solid white',
                borderRadius: '10px',
                marginTop: '10%', 
                backgroundColor: 'black',
                color: 'white',
                width: '300px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                marginLeft: '40%'
            }}
        >
            <h5>User Profile Card</h5>
            <img
                style={{
                    width: '50%',
                    borderRadius: '50%',
                    marginBottom: '15px',
                }}
                src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ORP/B4034D5B-B9CD-0FDA-A4A4B94A79E70949.jpg"
                alt="User Profile"
            />
            <h5>Rohit Patil</h5>
            <p>CEO & Founder Example</p>
            <p>Cricket University</p>
            
            {/* FontAwesome Icons */}
            <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faFacebookF} />
            </div>

            <Button variant="contained" color="primary" onClick={handleButtonClick}>
                Contact
            </Button>

        
            {/* {isPopupOpen && <Buttonwindow />} */}
        </div> 
        {/* {isPopupOpen && <Buttonwindow />}          */}
         </>          
    );
};

export default DesignProfileCard;
