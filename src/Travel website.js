
import './Travel.css';
import React, { useState } from 'react';

function PatilTravels() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [place, setPlace] = useState('');
  const [member, setMember] = useState(2);

  const handleLoginClick = () => setLoginVisible(!loginVisible);

  const handleLoginSubmit = () => {
    if (email === '' && password === '') {
      alert("Enter Details");
    } else {
      alert("Thanks: You Logged IN");
      setLoginVisible(false);
    }
  };

  const handleSubmitBooking = () => {
    if (place === '') {
      alert("First Enter Detail");
    } else {
      alert(`${place} Tour Booked`);
      setPlace('');
    }
  };

  const handleExploreClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h1>PATIL TRAVELS</h1>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#book">Book</a></li>
          <li><a href="#package">Package's</a></li>
          <li><a href="#bestPlace">Best Place's</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="icon">
          <i id="bar" className="fa-solid fa-bars"></i>
          <i id="user" className="fa-solid fa-user" onClick={handleLoginClick}></i>
        </div>
      </nav>

      <div className="main">
        <div className="mainText">
          <h1>Best Vacation Destination <br /> Your Holiday Dreams</h1>
          <button>Explore</button>
        </div>
      </div>

      <div className="book" id="book">
        <div className="head">
          <h1>Book <span>Your Place</span></h1>
        </div>
        <div className="bookingPage">
          <img src="book.jpg" alt="" />
          <div className="booking">
            <h2>Book Your Place Now</h2>
            <p>Where You Gone</p>
            <input type="text" placeholder="Where going" id="place" value={place} onChange={(e) => setPlace(e.target.value)} />
            <p>Member's</p>
            <input type="number" value={member} id="member" onChange={(e) => setMember(e.target.value)} />
            <p>Journey Start On</p>
            <input type="date" />
            <p>Journey Ends On</p>
            <input type="date" />
            <button id="submit" onClick={handleSubmitBooking}>Submit</button>
          </div>
        </div>
      </div>

      <div className="packages" id="package">
        <div className="head">
          <h1>Best <span>Package's</span></h1>
        </div>
        <div className="plans">
          <div className="planCard" onClick={() => handleExploreClick("https://www.airbnb.co.in/...")}>
            <img src="plan1.webp" alt="" />
            <h3>Shimla</h3>
            <p>2 Week Tour</p>
            <p>200,000 Only</p>
          </div>
          <div className="planCard" onClick={() => handleExploreClick("https://www.airbnb.co.in/...")}>
            <img src="plan2.webp" alt="" />
            <h3>Shimla</h3>
            <p>2 Week Tour</p>
            <p>200,000 Only</p>
          </div>
          <div className="planCard" onClick={() => handleExploreClick("https://www.airbnb.co.in/...")}>
            <img src="plan3.webp" alt="" />
            <h3>Shimla</h3>
            <p>2 Week Tour</p>
            <p>200,000 Only</p>
          </div>
        </div>
      </div>

      <div className="place" id="bestPlace">
        <div className="head">
          <h1>Explore <span>Best Places</span></h1>
        </div>
        <div className="cards">
          {Array.from({ length: 9 }, (_, i) => (
            <div className="places" key={i} onClick={() => handleExploreClick("https://www.airbnb.co.in/")}>
              <img src={`p${i + 1}.webp`} alt="" />
              <h3>Agra, India</h3>
              <p>209 Kilometer Away</p>
              <p>₹43,812 Night</p>
            </div>
          ))}
        </div>
      </div>

      <div className="connect" id="contact">
        <div className="head">
          <h1>Contact <span>Us</span></h1>
        </div>
        <div className="contact">
          <img src="connect.jpg" alt="" />
          <div className="connectText">
            <p>User-Name</p>
            <input type="text" placeholder="Enter Name" />
            <p>Password</p>
            <input type="password" placeholder="Enter password" />
            <button id="connect" onClick={() => alert("You Connected Successfully!")}>Connect</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="text">
          <h3>About US</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati doloremque aut voluptates vero sequi velit magni, accusantium architecto!</p>
        </div>
        <div className="text">
          <h3>Tour</h3>
          <p>Best Price</p>
          <p>Package</p>
          <p>Affordable</p>
          <p>Full</p>
        </div>
        <div className="text">
          <h3>Travel</h3>
          <p>Price</p>
          <p>Money Back</p>
          <p>Offer</p>
          <p>Quality</p>
        </div>
        <div className="text">
          <h3>Contact us</h3>
          <p>22-222-222</p>
          <p>Galaxy Apartment</p>
          <p>Ring Road</p>
          <p>12222444</p>
        </div>
      </div>

      {loginVisible && (
        <div className="loginPage">
          <input type="text" placeholder="Enter Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Enter password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button id="logBtn" onClick={handleLoginSubmit}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default PatilTravels;
