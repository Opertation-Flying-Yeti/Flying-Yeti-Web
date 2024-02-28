import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products"
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
}

const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
}
return(
  <Router>
<div className="grid-container">
<header className="header">
    <div className="brand">
        <button onClick="openMenu()">☰</button>
        <a href="index.html">Flying Yeti</a>
    </div>
    <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
    </div>
</header>
<link rel="stylesheet" href="style.css">
<title>Flying Yeti</title>
<body>
<div>
<header>
Flying Yeti
</header>
<aside className="sidebar">
<h3>Shopping Categories</h3>
<button className="sidebar-close-button" onClick="closeMenu()">x</button>
<ul>
    <li>
        <a href="index.html">Pants</a>
    </li>

    <li>
        <a href="index.html">Shirts</a>
    </li>
</ul>
</aside>
<main className="main">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Products />} />
  </Routes>
</main>
<div className="content">
    <ul className="products">
        <li>
            <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        </li>
        <li>
            <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        </li>
        <li>
            <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        </li>
        <li>
            <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        </li>
    </ul>
</div>
</main>
<footer>
&copy; 2022 Flying Yeti
</footer>
</div>
</body>
</div>
</Router>
export default App;
