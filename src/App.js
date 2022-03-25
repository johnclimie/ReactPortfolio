import React from 'react';
import Header from './components/Header';
import Content from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;