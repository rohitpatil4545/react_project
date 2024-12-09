// import React from "react";
// const Evenodd=({number})=>{
//     return (
//         <div>
//             {number%2===0 ? <p>Even</p> : <p>Odd</p>}
//         </div>
//     );
// };
// export default Evenodd;

// import { useState } from "react";

// Check the Eligible for voting  above 18 ;

// import React from 'react'

// const Evenodd = ({age}) => {
//   return (
//     <div>
//         {age>18? <p>Eligible for voting </p> : <p>Not Eligible for voting</p>}
//     </div>
//   )
// }

// export default Evenodd

// Dark mode   button

import React, { useState } from 'react';

const DarkLightToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(prevmode => !prevmode);
    };

    React.useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
        document.body.style.color = isDarkMode ? 'white' : 'black';
    }, [isDarkMode]);

    return (
        <div>
            <button onClick={toggleMode} className='button'>
                {isDarkMode ? 'Light-Mode' : 'Dark-Mode'}
            </button>
        </div>
    );
};

export default DarkLightToggle;

// Add friends :


// import React, { useState } from 'react';

// const Evenodd = () => {
//   const [friendStatus, setFriendStatus] = useState('Add Friend');
//   const [btnText, setBtnText] = useState('Friends');
//   const [color, setColor] = useState('red');


//   const handleClick = () => {
//     if (friendStatus === 'Add Friend') {
//       setFriendStatus('Friends');
//       setColor('green');
//       setBtnText('Remove Friend');
//     } else {
//       setFriendStatus('Add Friend');
//       setColor('red');
//       setBtnText('Friends');
//     }
//   };

//   return (
//     <div>
//       <div className="card">
//         <div className="box">
//           <img src="https://img.theweek.in/content/dam/week/magazine/theweek/sports/images/2023/11/25/56-Rohit-Sharma.jpg" alt="image" />
//         </div> 
//         <h2>Rohit Sharma</h2>
//         <h3 className="name" style={{ color: color }}>{friendStatus}</h3>
//         <button className="btn" onClick={handleClick}>{btnText}</button> 
//       </div>
//     </div>
//   );
// };

// export default Evenodd; 

// import React, { useState } from 'react';
// import './App.css';
// const Friend = () => {
//   const [isFriend, setIsFriend] = useState(false);
//   const handleClick = () => {
//     setIsFriend(!isFriend);  
//   };

//   return (
//     <div>
//       <div className="card">
//         <div className="box">
//           <img src="https://img.theweek.in/content/dam/week/magazine/theweek/sports/images/2023/11/25/56-Rohit-Sharma.jpg" alt="image" />
//         </div> 
//         <h2>Rohit Sharma</h2>
//         <h3 className="name" style={{ color: isFriend ? 'green' : 'red' }}>
//           {isFriend ? 'Friends' : 'Add Friend'}
//         </h3> 
//         <button className="btn" onClick={handleClick}>
//           {isFriend ? 'Remove Friend' : 'Friends'}
//         </button> 
//       </div>
//     </div>
//   );
// };

// export default Friend;

