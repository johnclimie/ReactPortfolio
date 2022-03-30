// Import React and useState library
import React, { useState } from 'react';

// Import CSS
import '../styles/Style.css';

// Creates contact component
function Contact() {

    // Creates useState function for form validation if a text field is empty
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { firstName, lastName, email, message } = formState;

    function formChange(e) {
        // If textbox is empty, error message appears
        if (!e.target.value.length) {
            setErrorMessage(`Empty fields are required`);
        } else {
            setErrorMessage('');
        }
        
        // If there is no errorMessage, formState is set to the new value
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    // Prevents default
    function submit(e) {
        e.preventDefault();
    }

    // Renders component
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
                    <input type="text" name="firstName" defaultValue={firstName} onBlur={formChange}></input>
                </div>
                <div>
                    <h3>Last Name</h3>
                    <input type="text" name="lastName" defaultValue={lastName} onBlur={formChange}></input>
                </div>
            </div>

            <div id="contact-email">
                <h3>Email</h3>
                <input type= "email" name="email" defaultValue={email} onBlur={formChange}></input>
            </div>

            <div id="contact-message">
                <h3>Questions or Concerns</h3>
                <textarea rows="8" name="message" defaultValue={message} onBlur={formChange}></textarea>
            </div>

            <button id="form-btn" type="submit" onSubmit={submit}>Email</button>

            {errorMessage && (
                <div>
                    <h3 style={{"text-align": "center"}}>{errorMessage}</h3>
                </div>
            )}

         </form>
    </section>
    )
}

// Exports contact component
export default Contact;