// Imports React libraries
import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    HashRouter,
} from "react-router-dom";

// Imports all components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import Content from "../src/components/AboutMe";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";

// Renders all components
function App() {
    return (
        <HashRouter basename="/">
        <Header />
            {/* Renders different components based on route */}
            <Routes>
               <Route path="/" element={<Content />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/resume" element={<Resume />} />
            </Routes>
        <Footer />
        </HashRouter>
    );
}

// Exports app
export default App;