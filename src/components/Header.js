import React from 'react';
import Navbar from './Navbar';
// Here we are importing a CSS file as a dependency
import '../styles/Style.css'


function Header() {
  return (
    <section id="introduction">
    <div id="img-half">
        {/* <div id="img-border">
            <img src='https://avatars.githubusercontent.com/u/90417021?s=400&u=fec4823d23b6904e31fdfda73881fa8bc80819fe&v=4" id="profile-img'></img>
        </div>     */}
    </div>

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

export default Header;