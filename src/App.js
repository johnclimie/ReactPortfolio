import React from 'react';
import Header from './components/Header';
import Content from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Content />
            {/* <Projects /> */}
            <Contact />
            <Footer />
        </div>
    );
}

export default App;