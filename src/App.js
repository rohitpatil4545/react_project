// // import React from 'react'
// import './App.css';
// // import VariableComponent from './VariableComponent';
// // import Button from './Button';
// // import Greeting from './Greeting';
// // function App() {
// //   return (
// //     <div>
// //       <Greeting/>
// //       <VariableComponent/>
// //       <div><Button/></div>
// //     </div>
// //   );
// // }

// import { Checkbox } from "@mui/material";
// import { useInsertionEffect } from "react";

// import { rgbToHex } from "@material-ui/core";
// import { radioClasses, Slide } from "@mui/material";
// import { Slider } from "antd";

// // export default App;

// // import React from 'react'
// // import Numberfilter from './Numberfilter';
// // const App = () => {
// //   return (
// //     <div>
// //         <Numberfilter/>
// //     </div>
// //   )
// // }

// // export default App ;

// // import React from 'react'
// // import Usefields from './Usefields';

// // function App() {
// //   const user={
// //      name:'Rohit',
// //      age:'20',
// //      email:'rohit@gmail.com',
// //      address:"ROOOOOOOOOOOOO"
// //   };
// //   return (
// //     <div>
// //       <Usefields user={user}/>
// //       </div>
// //   )
// // }

// // export default App

// import React from 'react'
// import sayhello from './Greeting2';
// const App = () => {
//   var differentname="Patil";
//   var message=sayhello(differentname);
//   return (
//     <div>
//     <h1 className='App'>{message}</h1>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Imagedisplay from './Imagedisplay'

// function App() {
//   const imageUrl="https://www.pngkey.com/png/detail/297-2979718_rohit-name.png";
//   return (
//     <div className='Image'>
//     <Imagedisplay imageUrl={imageUrl}/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Evenodd from './Evenodd';

// function App() {
//   const number=parseInt(prompt("Enter the Number: "));
//   return (
//     <div>
//       {/* <h1>Check the number is Even of Odd</h1> */}
//       <Evenodd number={number}/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import Evenodd from './Evenodd';

// const App = () => {
//   const [number, setNumber] = useState(parseInt(prompt("Enter the number: "), 10));

//   return (
//     <div>
//       <h1>Check Even or Odd</h1>
//       <Evenodd number={number} />
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import Togglecontent from './Togglecontent';

// function App() {
//   return (
//     <div className='Null'>
//        <h1>Toggle content Example :::::::::::::::::::::::::::::::::::::::::::::::::::</h1>
//        <Togglecontent/>
//     </div>

//   )
// }

// // export default App

// import React  from 'react'
// import Evenodd from './Evenodd';

// function App() {
//   const age=parseInt(prompt("Enter the age: "));
//   return (
//     <div>
//        <Evenodd age={age}/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Evenodd from './React-project';

// function App() {
//   return (
//     <div>
//       <Evenodd/>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import SimpleButton from './Simplebutton';

// const App = () => {
//     const handleClick = () => {
//         alert('Rohit Button is clicked NOW Ok !');
//     };

//     return (
//         <div>
//             <h1>Simple Button Example</h1>
//             <SimpleButton text="Click Me" color="lightblue" onClick={handleClick} />
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import Simpleinput from './Simpleinput';

// function App() {
//   const [inputValue, setInputValue] = React.useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//     console.log(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Spread Operator Input Example: </h1>
//       <Simpleinput
//         type='text'
//         placeholder='Enter your text here'
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>Input value is: {inputValue}</p>
//     </div>
//   );
// }

// export default App;

// simple-react-project done by Rohit:

// import React from 'react'
// import SimpleReactporject from './Simple-React-porject'

// function App() {
//   return (
//     <div>
//       <SimpleReactporject/>
//     </div>
//   )
// }

// export default App

//submission form :

// function MyButton() {
//     return (
//       <button>
//         I'm a button
//       </button>
//     );
//   }

//   export default function MyApp() {
//     return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <MyButton />
//       </div>
//     );
//   }

// import React from 'react'

// function App() {
//   return (
//     <div>
//         <h1>Rohit dada patil : </h1>
//     </div>
//   )
// }

// export default function MyApp() {
//   return (
//     <div>
//         <App/>
//     </div>
//   )
// }

// import React from 'react'
// import Heading from './Heading';
// import './App.css';
// function App() {
//   return (
//     <div className='App'>
//        <Heading  text="hello welcome to React js: "  color='blue'/>
//     </div>
//   )
// }

// export default App ;

// import React from 'react';
// import CustomButton from './Custom-Button';
// import './App.css';
// function App() {
//   return (
//     <div className='App' >
//       <CustomButton text="Click" backgroundcolor="blue" textcolor="white" />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Greeting3 from './Greeting3';

// function App() {
//   return (
//     <div>
//       <Greeting3/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from "./Counter";

// function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Charactercounter from "./Charactercounter";

// function App() {
//   return (
//     <div style={{marginTop:20}}>
//       <Charactercounter/>
//     </div>
//   )
// }

// export default

// import './App.css'
// import React from 'react';
// import CustomButton from "./CustomButton";

// function App() {
//   const handleButtonclick = () => {
//     alert("Button clickedddddddd!");
//   };

//   const handleButtonclicktwotimes = () => {
//     alert("This button is also clickeddddddd!");
//   };

//   return (
//     <div style={{marginTop:20, padding:10, display:"flex", marginLeft:20}}  >
//       <CustomButton text="click" bgcolor="blue" onClick={handleButtonclick}  />
//       <CustomButton className="custombutton" text="click2" bgcolor="blue" onClick={handleButtonclicktwotimes} />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import InteractiveInput from "./InteractiveInput";

// function App() {
//   return (
//     <div style={{margin:20}}>
//       <InteractiveInput initialinput="type here"/>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import DynamicImage from "./DynamicImage";
// function App() {
//   return (
//     <div>
//       <DynamicImage imagename="Rohit-1.jpg" />
//       <DynamicImage imagename="Screenshot (95).png" />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import { Container, Box } from "@mui/material";
// import Dynamiclink from "./Dynamiclink";
// function App() {
//   return (
//     <div>
//       <Container>
//          <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
//           <Dynamiclink/>
//          </Box>
//       </Container>
//     </div>
//   )
// }

// export default App

// import React from "react";
// import './App.css';
// import ImageCarousel from "./ImageCarousel";

// function App() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <h2 style={{ textAlign: 'center' , color:'white' }}>Image Carousel</h2>
//       <ImageCarousel />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Slider from './Slider' ;
// function App() {
//   return (
//     <div>
//       <h4
//       style={{textAlign:'center', color:'blue'}}>Smart Hit_Man</h4>
//       <Slider />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Zoom from './Zoom'
// function App() {
//   return (
//     <div>
//        <Zoom/>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import SimpleForm from './Simpleform';
// import { Container, Box } from '@mui/material';

// function App() {
//   return (
//     <div>
//       <Container>
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100vh"
//         >
//           <SimpleForm />
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default App;

// Friend

// import React from 'react'
// import Friend from './React-project'

// function App() {
//   return (
//     <div>
//       <Friend/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import RadioButton from './RadioButton' ;

// function App() {
//   return (
//     <div>
//       <RadioButton/>
//     </div>
//   )
// }

// export default  App

// import React from 'react'
// import FormValidation from './Formvalidation' ;

// function App() {
//   return (
//     <div>
//       <FormValidation Name="Enter your Email Address: "/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import LoginForm from './Loginform' ;

// function App() {
//   return (
//     <div>
//       <LoginForm/>
//     </div>
//   )
// }

// export default  App

// import React from 'react'
// import Message from './Message';

// function App() {
//   return (
//     <div>
//       {/* <h1>This is Message component : </h1> */}
//       <Message message='This is custom message: '/>
//     </div>
//   )
// }

// export default App
// App.js

// import React from "react";
// import Button2 from "./Button2";

// function App() {
//   const handleButtonClick1 = () => {
//     alert("Clicked 1 Button: ");
//   };

//   const handleButtonClick2 = () => {
//     alert("Clicked 2 Button");
//   };
//   return (
//     <div>
//       <Button2
//         text1="click 1"
//         onClicked1={handleButtonClick1}
//         text2="click 2"
//         onClicked2={handleButtonClick2}
//       />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Mycomponent from './Mycomponent'

// function App() {
//   return (
//     <div>
//       <Mycomponent name='Rohit' age={20} email='rohitpatil@gmail.com' />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Studentprofile from './Studentprofile'

// function App() {
//   return (
//     <div>
//       <Studentprofile name='Rohit patil'  age={20}  major="Computer Engineering: "/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Formvalidation2 from './Formvalidation2'

// function App() {
//   return (
//     <div>
//        <Formvalidation2/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Registration from './Registraton' ;

// function App() {
//   return (
//     <div>
//         <Registration/>
//     </div>
//   )
// }

// export default  App ;

// Dark mode button

// import React from 'react'
// import DarkLightToggle from './React-project';
// function App() {
//   return (
//     <div className='App'>
//       <DarkLightToggle/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import DesignProfileCard from './DesignProfileCard'
// import Buttonwindow from './Buttonwindow';
// function App() {
//   return (
//     <div>
//         <DesignProfileCard/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Inputdisplaycomponent from "./Inputdisplaycomponent";

// function App() {
//   return (
//     <div>
//       <h1>Controll Component Display in Text field: </h1>
//       <Inputdisplaycomponent/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Checkboxdisplay from "./Checkboxdisplay";

// function App() {
//   return (
//     <div>
//       <h1>Checkbox Check Example in Controll Component</h1>
//       <Checkboxdisplay />
//     </div>
//   )
// }

// export default  App

// import React from 'react'
// import Uncontrollcomponent from './Uncontrollcomponent'

// function App() {
//   return (
//     <div>
//       <h1>Uncontroll Component Example </h1>
//       <Uncontrollcomponent/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import AgeChecker from './AgeChecker';

// function App() {
//   return (
//     <div>
//       <AgeChecker/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Toggle from './Toggle' ;

// function App() {
//   return (
//     <div>
//       <Toggle />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Displaybutton from './Displaybutton' ;

// function App() {
//   return (
//     <div>
//         <Displaybutton/>
//     </div>
//   )
// }

// export default App

// Portfolio website

// import React from 'react'
// import Portfolio from './Portfolio' ;
// // import Portfoliosec from './Portfoliosec';

// function App() {
//   return (
//     <div>
//        <Portfolio/>
//     </div>
//   )
// }

// export default  App

// import React from 'react'
// // import Alert from './Alert' ;
// import AlertComponent from './Alert';

// function App() {
//   return (
//     <div>
//         <AlertComponent/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// // import Travel from './Travel website' ;
// import PatilTravels from './Travel website';

// function App() {
//   return (
//     <div>
//        <PatilTravels/>
//     </div>
//   )
// }

// export default App

// Food website

// import React from 'react'
// import Foodwebsit from './Food websit'

// function App() {
//   return (
//     <div>
//       <Foodwebsit/>
//     </div>
//   )
// }

// export default App

// Ecommerce

// import React from 'react'
// import EcommerceWebsite from './EcommerceWebsite' ;

// function App() {
//   return (
//     <div>
//         <EcommerceWebsite/>
//     </div>
//   )
// }

// export default App

// // Real time collebration

// import React, { useState } from 'react';
// import { Users, Clock, Edit } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   username: string;
//   timestamp: Date; // Changed from string to Date
// }

// const RealTimeCollaborationPlatform = () => {
//   const [messages, setMessages] = useState<Message[]>([
//     { id: 1, text: 'Hello, how are you?', username: 'John Doe', timestamp: new Date() },
//     { id: 2, text: 'I am good, thanks!', username: 'Jane Doe', timestamp: new Date() },
//   ]);
//   const [newMessage, setNewMessage] = useState('');
//   const [username, setUsername] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage && username) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           id: prevMessages.length + 1,
//           text: newMessage,
//           username,
//           timestamp: new Date(), // Setting current time as Date object
//         },
//       ]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
//       <h1 className="text-3xl font-bold mb-4">Real-Time Collaboration Platform</h1>
//       <div className="flex items-center mb-4">
//         <Users className="mr-2" />
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter your username"
//           className="py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
//         />
//       </div>
//       <div className="flex flex-col h-screen">
//         <div className="flex-1 overflow-y-auto mb-4">
//           {messages.map((message) => (
//             <div key={message.id} className="bg-gray-100 p-4 rounded-lg mb-2">
//               <span className="font-bold">{message.username}</span>
//               <span className="text-gray-500 ml-2">{message.timestamp.toLocaleTimeString()}</span> {/* Format Date */}
//               <p className="text-gray-700">{message.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center">
//           <Edit className="mr-2" />
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type a message"
//             className="py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
//           >
//             Send
//           </button>
//           <Clock className="ml-2" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealTimeCollaborationPlatform;

// React router example  

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Typography, Button, AppBar, Toolbar } from "@mui/material"; 
// import Home from './component/Home'; 
// import About from './component/About'; 
// import Contact from "./component/Contact us"; 
// import Courses from './component/Courses'

// function App() {
//   return ( 
//     <div>
//       <Router>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               Navigation Menu
//             </Typography>
//             <Button component={Link} to="/" color="inherit">
//               Home
//             </Button>
//             <Button component={Link} to="/about" color="inherit">
//               About
//             </Button>  
//             <Button component={Link} to="/contact" color="inherit">
//                contact
//             </Button> 
//             <Button component={Link} to="/courses" color="inherit">
//                Courses <Button component={Link} to='/c' color="inherit">C</Button> 
//            </Button> 
          
//           </Toolbar>
//         </AppBar>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />  
//           <Route path="/contact" element={<Contact />} />  
//           <Route path="/courses" element={<Courses />} /> 
//         </Routes>
//       </Router> 
//     </div> 
//   );
// }

// export default App;  

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Typography, Button, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/Contact us';
// import Courses from './component/Courses';
// import CourseCpp from "./component/CourseCpp"; 
// import Coursejava from "./component/Coursejava";
// import Coursepython from "./component/Coursepython"; 
// import CourseC from "./component/CourseC";
// function App() {
//   const [anchor, setAnchor] = useState(null);
//   const handleCoursesClick = (event) => {
//     setAnchor(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchor(null);
//   };

//   return (
//     <div>
//       <Router>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               Navigation Menu
//             </Typography>
//             <Button component={Link} to="/" color="inherit">
//               Home
//             </Button>
//             <Button component={Link} to="/about" color="inherit">
//               About
//             </Button>
//             <Button component={Link} to="/contact" color="inherit">
//               Contact
//             </Button>
//             <Button
//               color="inherit"
//               onClick={handleCoursesClick}
//             >
//               Courses
//             </Button>
//             <Menu
//               anchorEl={anchor}
//               open={Boolean(anchor)}
//               onClose={handleClose}
//             >
//               <MenuItem component={Link} to="/courses/c" onClick={handleClose}>
//                 C
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/cpp" onClick={handleClose}>
//                 C++
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/java" onClick={handleClose}>
//                 Java
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/python" onClick={handleClose}>
//                 Python
//               </MenuItem>
//             </Menu>
//           </Toolbar>
//         </AppBar>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/courses" element={<Courses />}>
//             <Route path="c" element={<CourseC name="C" />} />
//             <Route path="cpp" element={<CourseCpp name="C++" />} />
//             <Route path="java" element={<Coursejava name="Java" />} />
//             <Route path="python" element={<Coursepython name="Python" />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// Input display component 

// import React from 'react'
// import Inputdisplaycomponent from './Inputdisplaycomponent'

// function App() {
//   return (
//     <div>
//       <Inputdisplaycomponent/>
//     </div>
//   )
// }

// export default App 

// import React from 'react'
// import TableComponent from './Tabel'

// function App() {
//   return (
//     <div>
//         <TableComponent/>
//     </div>
//   )
// }

// export default App 

// import React from 'react'
// import DynamicTable from './DynamicTable';

// function App() {
//   return (
//     <div>
//         <DynamicTable/>
//     </div>
//   )
// }

// export default App   


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Typography, Button, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact us";
// import Courses from "./component/Courses";
// import CourseCpp from "./component/CourseCpp";
// import Coursejava from "./component/Coursejava";
// import Coursepython from "./component/Coursepython";
// import CourseC from "./component/CourseC";

// function App() {
//   const [anchor, setAnchor] = useState(null);

//   const handleCoursesClick = (event) => {
//     setAnchor(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchor(null);
//   };

//   return (
//     <div>
//       <Router>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               Navigation Menu
//             </Typography>
//             <Button component={Link} to="/" color="inherit">
//               Home
//             </Button>
//             <Button component={Link} to="/about" color="inherit">
//               About
//             </Button>
//             <Button component={Link} to="/contact" color="inherit">
//               Contact
//             </Button>
//             <Button color="inherit" onClick={handleCoursesClick}>
//               Courses
//             </Button>
//             <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
//               <MenuItem component={Link} to="/courses" onClick={handleClose}>
//                 All Courses
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/c" onClick={handleClose}>
//                 C
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/cpp" onClick={handleClose}>
//                 C++
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/java" onClick={handleClose}>
//                 Java
//               </MenuItem>
//               <MenuItem component={Link} to="/courses/python" onClick={handleClose}>
//                 Python
//               </MenuItem>
//             </Menu>
//           </Toolbar>
//         </AppBar>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/courses/c" element={<CourseC />} />
//           <Route path="/courses/cpp" element={<CourseCpp />} />
//           <Route path="/courses/java" element={<Coursejava />} />
//           <Route path="/courses/python" element={<Coursepython />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;  

// use Effect Hooks use in thei program 

// import React from 'react'
// import AxiosDataFeatching from './AxiosDataFeatching' ;

// function App() {
//   return (
//     <div>
//       <AxiosDataFeatching/>
//     </div>
//   )
// }

// export default App

//Real time clock 

// import React from 'react'
// import RealTimeClock from './RealTimeClock';

// function App() {
//   return (
//     <div>
//        <RealTimeClock/>     
//     </div>
//   )
// }

// export default App 

// // useRef Hooks code 

// import React from 'react'
// import AutoFocusInput from './AutoFocusInput'

// function App() {
//   return (
//     <div 
    
//     style={{
//        margin:'20px'
//     }}>
//       <AutoFocusInput/>
//     </div>
//   )
// }

// export default App 

// Password check the conform password is correct or not using Hooks : 

// import React from 'react'
// import PasswordMatchValiation from './PasswordMatchValiation' ;

// function App() {
//   return (
//     <div style={{margin:'20px'}}> 
//         <PasswordMatchValiation />
//     </div>
//   )
// }

// export default App 

import React from 'react'
import Portfolio from './Portfolio'

function App() {
  return (
    <div><Portfolio/></div>
  )
}

export default App