import { useRef, useState } from 'react';  
// import Portfoliosec from './Portfoliosec';

// import React {useState}from 'react' 
import './Portfolio.css';

const Portfolio = () => {  

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [barIcon, setBarIcon] = useState("fa-solid fa-bars");
  const ulRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleCvDownload = () => {
    alert("Downlode sucessfully")
  };

  const handleLogin = () => { 
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    if (email === "" || pass === "") {
      alert("Fill Detail");
    } else {
      setIsLoggedIn('True');
      alert("Logged IN");
    } 

  };

  const toggleBar = () => {
    if (ulRef.current) {
      ulRef.current.classList.toggle("showData");
    }
    setBarIcon((prev) => (prev === "fa-solid fa-bars" ? "fa-solid fa-xmark" : "fa-solid fa-bars"));
  };

  return ( 
   
    <div>
      
      <div className="container">
  <nav>
    <div className="logo">
      <h1>
        Developer<span>RO</span>  
      </h1>
    </div>
    <ul>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#service">Services</a>
      </li>
      <li>
        <a href="#work">My Work</a>
      </li>
      <li>
        <a href="#contact">Contact Us</a>
      </li>
    </ul>
    <i id="bar" className="fa-solid fa-bars" />
  </nav>
  <div className="main">
    <div className="mainText">
      <h3>Hello I am</h3>
      <h1>
        Rohit <span>Patil</span>
      </h1>
      <p>FullStack Developer</p>
      <button id="cvBtn" onClick={handleCvDownload}>Downlode CV</button>
    </div>
    <img
      src="pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png"
      alt=""
    />
  </div>
  <div className="aboutus" id="about">
    <div className="head">
      <h1>
        About <span>Us</span>
      </h1>
    </div>
    <div className="about">
      <img
        src="pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png"
        alt=""
      />
      <div className="aboutText">
        <h2>
          Hello I am FullStack <span>Developer</span>
        </h2>
        <p>
          Experience :<span>Fresher</span>{" "}
        </p>
        <p>
          Speciality :<span>Website Development</span>{" "}
        </p>
        <p>
          Skills :<span>Java FullStack</span>{" "}
        </p>
        {/* <p>YouTuber :<span>Making Programming Videos</span> </p> */}
        <p>
          Email :<span> rohitpatil00045@gmail.com</span>{" "}
        </p>
      </div>
    </div>
  </div>
  <div className="services" id="service">
    <div className="head">
      <h1>
        Our <span>Services</span>
      </h1>
    </div>
    <div className="service">
      <div className="card">
        <i className="fa-solid fa-code" />
        <h3>Website Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          sed!
        </p>
      </div>
      <div className="card">
        <i className="fa-solid fa-code" />
        <h3>App Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          sed!
        </p>
      </div>
      <div className="card">
        <i className="fa-solid fa-code" />
        <h3>Website Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          sed!
        </p>
      </div>
    </div>
  </div>
  <div className="works" id="work">
    <div className="head">
      <h1>
        My <span>Works</span>
      </h1>
    </div>
    <div className="myWork">
      <div className="workCard">
        <img src="Screenshot (17).png" alt="" />
        <p>Responsive Food Website</p>
        {/* <a
          href="file:///C:/Users/Admin/Documents/Js-project/Food-website/index.html"
          target="_blank"
        >
          checkout
        </a> */} 
        <a href="http://localhost:5500/Food-website/index.html" target="_blank">
  checkout
</a>

      </div>
      <div className="workCard">
        <img src="Screenshot (18).png" alt="" />
        <p>Responsive Traveling website</p>
        <a
          href="file:///C:/Users/Admin/Documents/Js-project/Travel/index.html"
          target="_blank"
        >
          checkout
        </a>
      </div>
      <div className="workCard">
        <img src="Screenshot (19).png" alt="" />
        <p>Responsive Ecommers website</p>
        <a
          href="file:///C:/Users/Admin/Documents/Js-project/Responsive-website/E-com.html#contact"
          target="_blank"
        >
          checkout
        </a>
      </div>
      <div className="workCard">
        <img src="Screenshot (20).png" alt="" />
        <p>Weather App using API</p>
        <a
          href="file:///C:/Users/Admin/Documents/Js-project/Weather-app/index.html"
          target="_blank"
        >
          checkout
        </a>
      </div>
    </div>
  </div>
  <div className="connect" id="contact">
    <div className="head">
      <h1>
        Contact <span>Us</span>
      </h1>
    </div>
     <div className="contact" >
      <p>Email :</p>
      <input type="text" placeholder="Enter Email" id="email" />
      <p>Password :</p>
      <input type="password" placeholder="Enter Password" id="pass" />
      <p>Message :</p>
      <input type="text" placeholder="Enter Message" id="msg" />
      <button id="submit" onClick={handleLogin}>Submit</button> 
    </div> 
  
  </div>
  <div className="footer">
    <div className="text">
      <h3>Connect Here</h3>
      <p>YouTube</p>
      <p>Twitter</p>
      <p>Instagram</p>
      <p>Facebook</p>
    </div>
    <div className="text">
      <h3>My Work</h3>
      <p>quality</p>
      <p>Good</p>
      <p>Best price</p>
      <p>Best</p>
    </div>
    <div className="text">
      <h3>Effort</h3>
      <p>Quality</p>
      <p>Affordable</p>
      <p>Good</p>
      <p>Best Price</p>
    </div>
    <div className="text">
      <h3>Contact</h3>
      <p>Email</p>
      <p>Message</p>
      <p>Phone</p>
      <p>9090-33-433</p>
    </div>
  </div>
</div>

    </div>
  ) ;
}

export default Portfolio     



