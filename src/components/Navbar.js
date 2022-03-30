// Import React library
import React from 'react';

// Import Link from 'react-router-dom';
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

  // Create navbar component
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

// Export navbar component
export default Navbar;