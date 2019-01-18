import React, { Component } from 'react';
import './projectCard.css';




class ProjectCard extends Component {
    onClickDiv = () => {
        return true; //fixes hover issue on iOS
    }

    render () {
        return (
            <div className="project-card wow fadeIn" data-wow-delay='0.2s' onClick={this.onClickDiv}>
                <div className="meta">
                <div className="photo" style={{backgroundImage: `url(${this.props.bgImage})`}}></div>
                <ul className="details">
                    <li className="tags">
                    <ul>
                        <li><i className="fas fa-code" /> Tools/Techs Used</li>
                        {
                            this.props.tech.map((tech, i) =>{
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
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <p className="project-links">
                    <a href={this.props.GitHub} target='_blank' rel="noopener noreferrer">GitHub</a>
                    {
                        this.props.Demo 
                        ? <a href={this.props.Demo} target='_blank' rel="noopener noreferrer">Live Demo</a>
                        : <a href="#0" className="disabled">Live Demo</a>
                    }  
                </p>
                </div>
            </div>
            
        )
    }
}

export default ProjectCard;