// Imports React library
import React from 'react';

// Imports CSS
import '../styles/Style.css';

// Imports project components
import Project from './Project';
import projects from '../projects';

// Creates portfolio component
function Portfolio() {
    return <Project projects={projects}/>;
}

// Exports portfolio component
export default Portfolio;