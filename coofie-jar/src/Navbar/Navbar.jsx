import React from 'react';
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top topbar">
      <div className="container-fluid fs-5">
        <a className="navbar-brand fs-5" href="#home">Coofie Jar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" to="#">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link">Start Fundraiser </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
