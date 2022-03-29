import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import Content from "../src/components/AboutMe";
import Contact from "../src/components/Contact";

function App() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
               <Route path="/" element={<Content />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/contact" element={<Contact />} />
               {/* <Route Resume="/resume" element={} /> */}

               {/* </Route> */}
            </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;