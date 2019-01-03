import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Brain from './img/brain.PNG';
import './projects.css';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 0
        };
    }
    render () {
        return (
            <div className='project-container'>
                <h1>Projects</h1>
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: `url(${Brain}) center / cover` }}><span className="card-title-style">Face Recognition App</span></CardTitle>
                    <CardText>
                        React | NodeJs | PostreSQL | ExpressJS
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: `url(${Brain}) center / cover` }}><span className="card-title-style">Robofriends</span></CardTitle>
                    <CardText>
                        HTML | CSS | React 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>   
            </div> 
        );   
    }
}

export default Projects;