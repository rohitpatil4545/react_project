import React from 'react'
import './EcommerceWebsite.css';
const EcommerceWebsite = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="index.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Catamaran:wght@200&family=Courgette&family=Dancing+Script:wght@700&family=Edu+TAS+Beginner:wght@700&family=Lato:wght@300;900&family=Mukta:wght@700&family=Mulish:wght@300&family=Open+Sans&family=PT+Sans:ital,wght@1,700&family=Poppins:wght@300&family=Raleway:wght@100&family=Roboto&family=Roboto+Condensed:wght@700&family=Roboto+Slab&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <nav>
      <div className="logo">
        <img src="logo.png" alt="" />
        <ul>
          <li>
            <a href="#men">MEN</a>
          </li>
          <li>
            <a href="#women">WOMEN</a>
          </li>
          <li>
            <a href="#slider">TRENDS</a>
          </li>
          <li>
            <a href="#blog">BLOGS</a>
          </li>
        </ul>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search for product & more." />
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="icons">
        <i className="fa-regular fa-user" />
        <i className="fa-solid fa-bag-shopping" />
      </div>
    </nav>
    <div className="main">
      <img src="main.png" alt="" /> 
      <div className="mainText">
        <h1>Wear With Trends</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vero
          sit soluta <br /> corporis minima adipisci.consectetur adipisicing
          elit. Nulla vero,
        </p>
        <button>Explore</button>
      </div>
    </div>
    <div id="men">
      <div className="head">
        <h1>Men's Wear</h1>
      </div>
      <div className="menCard">
        <div className="card">
          <img src="men1.webp" alt="" />
          <p>Trends Wear</p>
          <p>30% OFF</p>
        </div>
        <div className="card">
          <img src="men2.webp" alt="" />
          <p>Trends Wear</p>
          <p>30% OFF</p>
        </div>
        <div className="card">
          <img src="men3.webp" alt="" />
          <p>Trends Wear</p>
          <p>30% OFF</p>
        </div>
      </div>
    </div>   
    <div id="women"> 
      <div className="head">
        <h1>Women's Wear</h1>
      </div>
      <div className="WomenCard">
        <div className="card">
          <img src="wom1.webp" alt="" />
          <p>Trends Wear</p>
          <p>30% OFF</p>
        </div>
        <div className="card">
          <img src="wom2.webp" alt="" />
          <p>Trends Wear</p>
          <p>30% OFF</p>
        </div>
        <div className="card">
          <img src="wom3.webp" alt="" />
          <p>Trends Wear</p>
          <p>30% OFF</p>
        </div>
      </div>
    </div>
    <div id="slider">
      <div className="head">
        <h1>Limited Stock's</h1>
      </div>
      <div className="slides">
        <div className="slideCard">
          <img src="men1.webp" alt="" />
          <img src="men2.webp" alt="" />
          <img src="men3.webp" alt="" />
        </div>
        <div className="slideCard">
          <img src="wom1.webp" alt="" />
          <img src="wom2.webp" alt="" />
          <img src="wom3.webp" alt="" />
        </div>
        <div className="slideCard">
          <img src="men2.webp" alt="" />
          <img src="wom1.webp" alt="" />
          <img src="men1.webp" alt="" />
        </div>
        <div className="slideCard">
          <img src="wom1.webp" alt="" />
          <img src="men1.webp" alt="" />
          <img src="wom3.webp" alt="" />
        </div>
      </div>
      <div id="blog">
        <div className="head">
          <h1>Read Latest Blog's</h1>
        </div>
        <div className="blogs">
          <div className="blogCard">
            <img src="gr.png" alt="" />
            <div>
              <h3>Trends Girls Wear</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                repellendus sunt deleniti? Alias, voluptas magni. Optio, eius
                rerum?
              </p>
              <a href="https://www.stylecraze.com/articles/best-fashion-blogs/">
                Read Blog
              </a>
            </div>
          </div>
          <div className="blogCard">
            <img src="men2.webp" alt="" />
            <div>
              <h3>Trends Boys Wear</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                repellendus sunt deleniti? Alias, voluptas magni. Optio, eius
                rerum?
              </p>
              <a href="https://www.stylecraze.com/articles/best-fashion-blogs/">
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="text">
        <h3>About Us</h3>
        <p>Trending Cloth</p>
        <p>Trends</p>
        <p>search</p>
        <p>Invention</p>
      </div>
      <div className="text">
        <h3>Women</h3>
        <p>Best</p>
        <p>Trend Wears</p>
        <p>Affordable </p>
        <p>Quality</p>
      </div>
      <div className="text">
        <h3>Men</h3>
        <p>Best</p>
        <p>Trend Wear</p>
        <p>Affordable</p>
        <p>Quality</p>
      </div>
      <div className="text">
        <h3>Connect Us</h3>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>YouTube</p>
      </div>
    </div>
  </div>
  {/* onclick card then open in new tab */}
</>

    </div>
  )
}

export default EcommerceWebsite