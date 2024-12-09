// import React, {useState} from 'react'
// import './App.css'
// function SimpleReactporject() { 
//     const [color , setcolor]=useState('red'); 
//   return (
//     <div> 
//         <h1>My favourat Color is : {color}</h1>
//         <button onClick={()=>setcolor("blue")}>
//             blue
//         </button> 

//         <button onClick={()=>setcolor("yellow")}>
//             yellow
//         </button>

//         <button onClick={()=>setcolor("green")}>
//            green
//         </button>

//         <button onClick={()=>setcolor("pink")}>
//             pink
//         </button>

//         <button onClick={()=>setcolor("orange")}>
//             orange
//         </button>
//     </div>
//   )
// }

// export default SimpleReactporject ; 


// import React, { useState } from 'react';
// import './App.css';

// function SimpleReactporject() {
//   const [color, setColor] = useState('red');
//   const [textColor, setTextColor] = useState('white');


//   const updateColor = (newColor) => {
//     setColor(newColor);

//     if (newColor === 'blue' || newColor === 'green') {
//       setTextColor('white'); 
//     } else {
//       setTextColor('black'); 
//     }
//   };

//   return (
//     <div style={{ backgroundColor: color, color: textColor, padding: '20px' }}>
//       <h1>My favourite color is: {color}</h1>
//       <button onClick={() => updateColor('blue')}>blue</button>
//       <button onClick={() => updateColor('yellow')}>yellow</button>
//       <button onClick={() => updateColor('green')}>green</button>
//       <button onClick={() => updateColor('pink')}>pink</button>
//       <button onClick={() => updateColor('orange')}>orange</button>
//     </div>
//   );
// }

// export default SimpleReactporject;


import './polyfills';
import loadReact from './react-loader';

loadReact()
  .then(() => import('./components/App'))
  .then(App => {
    const {React, ReactDOM} = window;

    if (typeof window.ReactDOMClient !== 'undefined') {
      // we are in a React that only supports modern roots

      ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement(App.default)
      );
    } else {
      ReactDOM.render(
        React.createElement(App.default),
        document.getElementById('root')
      );
    }
  });
