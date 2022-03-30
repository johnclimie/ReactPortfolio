// Import React library
import React from 'react';

// Import Navbar component
import Navbar from './Navbar';

// Here we are importing a CSS file as a dependency
import '../styles/Style.css'

// Create header component 
function Header() {
  return (
    <section id="introduction">
    <div id="text-half">
        <h1>My Name is <span>John Climie</span></h1>
        <div>
            <h3>Full-Stack Web Developer</h3>
            <hr></hr>
        </div>
        <Navbar />
    </div>
    </section>
  );
}

// Export Header component
export default Header;