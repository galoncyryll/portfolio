import React from 'react';
import './projects.css';
import ProjectCards from './projectCard/ProjectCard';

// import Brain from './img/brain.PNG';
//import Crim from './img/Crim.png';
// import GitHub from './img/GitHub.PNG';
// import DiscordBanner from './img/discordbanner.png';
// import Shop from './img/shop.PNG';
import { projectData } from '../../projectData';

const Projects: React.FC = () => {
    return (
        <div className='projects-body' id='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {
                    projectData.map((data, index) => {
                        return <ProjectCards 
                            key={index}
                            title={data.title}
                            bgImage={data.bgImg}
                            description={data.description}
                            tech={data.tech}
                            GitHub={data.GitHub}
                            Demo={data.Demo}
                            Featured={data.Featured}
                        />;
                    })
                }   
            </div> 
        </div> 
    );   
};


export default Projects;