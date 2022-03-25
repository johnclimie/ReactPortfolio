import React from 'react';

function Project(props) {
    return (
    <div>
        <div id="project1">
            <h2 id="project-title">{props.name}</h2>
            <div id="project-container">
                <div id="project-img-container">
                    <img src={`${props.img}`} id="project-img"></img>
                </div>
                <div id="project-info">
                    <p id="project-desc">
                        {props.description}
                    </p>
                    <div id="project-languages">
                        <h3>Created With {props.languages}</h3>
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
                        <a href={`${props.deployment}`}>View Deployment</a>
                        <a href={`${props.github}`}>View on GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}