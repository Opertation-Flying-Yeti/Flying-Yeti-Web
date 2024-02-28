import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
}

const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
}

  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick="openMenu">☰</button>
                    <a href="index.html">Flying Yeti</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
                </header>
    </div>
  );
}

export default App;
