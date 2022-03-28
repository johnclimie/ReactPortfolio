import React from 'react';

function Project({ projects }) {
    return (

    projects.map((project) => (
        <div>
        <div id="project1">
            <h2 id="project-title">{project.name}</h2>
            <div id="project-container">
                <div id="project-img-container">
                    <img src={`${project.img}`} id="project-img"></img>
                </div>
                <div id="project-info">
                    <p id="project-desc">
                        {project.description}
                    </p>
                    <div id="project-languages">
                        <h3>Created With {project.languages}</h3>
                        {/* <div id="html-icon">
                            <p>HTML</p>
                        </div>
                        <div id="css-icon">
                            <p>CSS</p>
                        </div>
                        <div id="javascript-icon">
                            <p>JavaScript</p>
                        </div> */}
                    </div>
                    <div id="project-links">
                        <a href={`${project.deployment}`}>View Deployment</a>
                        <a href={`${project.github}`}>View on GitHub</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ))
    )
}

export default Project;