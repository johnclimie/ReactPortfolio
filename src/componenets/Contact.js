import React from 'react';
import '../styles/Style.css';

function Contact() {
    return (
        <section id="contact-me">

        <div id="contact-logo-section">
            <div id="contact-logo">
                <h1 class="logo-text">Contact Me</h1>
            </div>
        </div>

        <form id= "contact-form">
            <div id="contact-name">
                <div>
                    <h3>First Name</h3>
                    <input type="text"></input>
                </div>
                <div>
                    <h3>Last Name</h3>
                    <input type="text"></input>
                </div>
            </div>

            <div id="contact-email">
                <h3>Email</h3>
                <input type= "email"></input>
            </div>

            <div id="contact-message">
                <h3>Questions or Concerns</h3>
                <textarea rows="8"></textarea>
            </div>

            <button id="form-btn">Email</button>

         </form>
    </section>
    )
}

export default Contact;