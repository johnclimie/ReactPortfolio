import React from 'react';
import '../styles/Style.css';
import Project from './Project';

import projects from '../projects';

function Portfolio() {
    return <Project projects={projects}/>;
}
export default Portfolio;