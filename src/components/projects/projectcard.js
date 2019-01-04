import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button, CardMenu } from 'react-mdl';
import Brain from './img/brain.PNG';


const projectCard = (props) => {
  return (
    <div className='projects-card'>
        <Card shadow={0} style={{minWidth: '400px', margin: '1rem auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Brain}) center / cover`}}>Face Recognition App</CardTitle>
        <CardText>
            React | NodeJS | ExpressJs | PostgreSQL
        </CardText>
        <CardActions border>
            <Button colored href='https://github.com/galoncyryll/face-recognition-app' target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button colored href='https://face-recognition-p.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        </CardMenu>
        </Card>
        <Card shadow={0} style={{minWidth: '400px', margin: '1rem auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Brain}) center / cover`}}>Robofriends App</CardTitle>
            <CardText>
                HTML | CSS | React
            </CardText>
            <CardActions border>
            <Button colored href='https://github.com/galoncyryll/face-recognition-app' target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button colored href='https://face-recognition-p.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        </CardMenu>
        </Card>
        <Card shadow={0} style={{minWidth: '400px', margin: '1rem auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Brain}) center / cover`}}>Portfolio</CardTitle>
            <CardText>
                HTML | CSS | React | React router
            </CardText>
            <CardActions border>
            <Button colored href='https://github.com/galoncyryll/face-recognition-app' target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button colored href='https://face-recognition-p.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        </CardMenu>
        </Card>
    </div>
  );
};

export default projectCard;