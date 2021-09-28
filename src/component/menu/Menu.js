import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Menu.css';


class Menu extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-hugi">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="images/Logo.png" className="img-fluid"></img>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-navbar" >
                  <li className="nav-item">
                    <Link to="/" className="nav-link Active">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-primary py-2 px-4" href="#">Sign Up</a>
                  </li>               
                </ul>             
              </div>
            </div>
          </nav>
      </div>
        )
    }
}
export default Menu;