import React from 'react';
import './projectCard.css';

interface Props {
    title: string
    bgImage: string
    description: string
    tech: string[]
    GitHub: string | null
    Demo: string | undefined
    Featured: boolean | undefined
}

const ProjectCard: React.FC<Props> = ({title, bgImage, description, tech, GitHub, Demo, Featured}: Props) => {
    const onClickDiv = () => {
        return true; //fixes hover issue on iOS
    };

    return (
        <div className="project-card wow fadeIn" data-wow-delay='0.2s' onClick={onClickDiv}>
            <div className="meta">
                <div className="photo" style={{backgroundImage: `url(${bgImage})`}}></div>
                <ul className="details">
                    <li className="tags">
                        <ul>
                            <li><i className="fas fa-code" /> Tools/Techs Used</li>
                            {
                                tech.map((tech, i) =>{
                                    return (
                                        <li key={i}>{tech}</li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p className="desc">{description}</p>
                <p className="project-links">
                    {
                        GitHub 
                            ? <a href={GitHub} target='_blank' rel="noopener noreferrer">GitHub</a>
                            : <a href="#0" className="disabled">GitHub</a>
                    }        
                    {
                        Demo 
                            ? <a href={Demo} target='_blank' rel="noopener noreferrer">Link</a>
                            : <a href="#0" className="disabled">Link</a>
                    }  
                </p>
                { Featured 
                    ? <div className="featured">
                        <span className="featured-card">
                        FEATURED
                        </span>
                    </div> 
                    : false 
                }
            </div>
        </div>
            
    );
};

export default ProjectCard;