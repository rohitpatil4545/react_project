import React from 'react'
import './Foodwebsite.css';
const Foodwebsit = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="Ro-Image.jpg" />
  <title>Patil-foods</title>
  <link rel="stylesheet" href="index.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Catamaran:wght@200&family=Courgette&family=Dancing+Script:wght@700&family=Edu+TAS+Beginner:wght@700&family=Lato:wght@300;900&family=Mukta:wght@700&family=Mulish:wght@300&family=Open+Sans&family=PT+Sans:ital,wght@1,700&family=Poppins:wght@300&family=Raleway:wght@100&family=Roboto&family=Roboto+Condensed:wght@700&family=Roboto+Slab&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <nav>
      <div className="logo">
        <h1>PATIL FOODS</h1>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search Here" id="searchInput" />
        <button id="searchBtn">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      <div className="icons">
        <i id="user" className="fa-solid fa-user" />
        <i className="fa-solid fa-cart-shopping" />
        <p id="cartNum">0</p>
      </div>
    </nav>
    <div className="option">
      <h1>Recomendation's</h1>
      <ul>
        <li>
          <a>FastFood</a>
        </li>
        <li>
          <a>Tasty Food</a>
        </li>
        <li>
          <a>Healthy Food</a>
        </li>
      </ul>
    </div>
    <div>
      <div className="head">
        <h1>Foods</h1>
      </div>
      <div className="foods" id="fast">
        <div className="card">
          <img src="f1.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
        <div className="card">
          <img src="f2.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
        <div className="card">
          <img src="f3.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
      </div>
      <div className="foods" id="tasty">
        <div className="card">
          <img src="t1.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
        <div className="card">
          <img src="t2.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
        <div className="card">
          <img src="t3.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
      </div>
      <div className="foods" id="healthy">
        <div className="card">
          <img src="h1.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
        <div className="card">
          <img src="h2.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
        <div className="card">
          <img src="h3.jpeg" alt="" />
          <p>Best Food Ever</p>
          <button id="cartBtn">Add To Cart</button>
          <button id="removeBtn">Remove To Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div id="chef">
    <div className="head">
      <h1>Our Chef's</h1>
    </div>
    <div className="chefs">
      <div className="chefCard">
        <img src="chef1.jpg" alt="" />
        <p>Top Chefs</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="chefCard">
        <img src="chef2.jpg" alt="" />
        <p>Top Chefs</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="chefCard">
        <img src="chef3.jpg" alt="" />
        <p>Top Chefs</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <div className="loginPage">
    <h1>Login</h1>
    <input type="text" placeholder="Enter Email" id="email" />
    <input type="password" placeholder="Enter password" id="pass" />
    <button id="loginBtn">Log In</button>
  </div>
  <div className="chefData">
    <button id="closeBtn">
      <i className="fa-solid fa-xmark" />
    </button>
    <div className="detail"></div>
  </div>
  <div className="footer">
    <div className="text">
      <h3>About US</h3>
      <p>
        Lorem ipsum dolor sit amet <br />
        consectetur, adipisicing el <br />
        Eaque blanditiis amet, vitae <br />
        non dolorum, aut repudiandae <br />
        cupiditate error unde, est?
      </p>
    </div>
    <div className="text">
      <h3>Category</h3>
      <p>Healty</p>
      <p>Tasty</p>
      <p>Fast</p>
      <p>Diet </p>
    </div>
    <div className="text">
      <h3>Offer</h3>
      <p>Order Now</p>
      <p>30% Off</p>
      <p>Buy 1 Get 1</p>
      <p>Limited</p>
    </div>
    <div className="text">
      <h3>Address</h3>
      <p>NSR Road</p>
      <p>Tilak Nagar</p>
      <p>3rd Floor</p>
      <p>333-4544</p>
    </div>
  </div>
</>

    </div>
  )
}

export default Foodwebsit