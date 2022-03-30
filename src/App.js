import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    HashRouter,
} from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import Content from "../src/components/AboutMe";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";

function App() {
    return (
        <HashRouter>
        <Header />
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

export default App;