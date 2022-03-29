import React from 'react';
// import Link from 'react-router-dom';
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

function Navbar() {
    return (
        <div id="nav-links">
            <a>
                <Link to="/">
                    About Me
                </Link>
            </a>
            <a>
                <Link to="/portfolio">
                    Portfolio
                </Link>
            </a>
            <a>
                <Link to="/contact">
                    Contact
                </Link>
            </a>
            <a>
                <Link to="/resume">
                    Resume
                </Link>
            </a>
        </div>
    );
}

export default Navbar;