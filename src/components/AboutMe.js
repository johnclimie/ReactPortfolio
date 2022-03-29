import React from 'react';
import '../styles/Style.css';

function Content() {
    return (
        <section id="about-me">
        <div id="about-me-logo-section">
            <div id="about-me-logo">
                <h1 class="logo-text">About Me</h1>
            </div>
            <div id="img-border">
                <img src='https://avatars.githubusercontent.com/u/90417021?s=400&u=fec4823d23b6904e31fdfda73881fa8bc80819fe&v=4" id="profile-img'></img>
            </div>
            <div id="resume">
                <h3>You can view my resume <a href="https://drive.google.com/file/d/1tQO4xy-urKPbJ_N_l3F3ShzANjrgCDdu/view?usp=sharing"><span>here</span></a></h3>
            </div>
        </div>

        <div id="text-section">
            <h3>I am a full-stack web developer based around Atlanta, GA. I currently attend a coding bootcamp hosted by Georgia Tech, which ends in the middle of April. I currently hold a certificate in responsive web design, provided by freeCodeCamp.org. I am profecient in HTML, CSS, and JavaScript. I have also worked in MySQL, MongoDB, JQuery, Bootstrap, Server-side APIs, React.js, and Handlebars. I am seeking a job in either front-end, back-end or fullstack web development. I am open to either on-site, remote or hybrid positions.</h3>
        </div>

        </section>
    )
}

export default Content;
