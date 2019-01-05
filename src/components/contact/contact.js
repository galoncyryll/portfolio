import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';
import Avatar from './avatar.png'

class Contact extends Component {
    render () {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h1>Get in touch.</h1>
                        <hr className="styler"/>
                        <h2>Cyryll Joseph Galon</h2>
                        <img 
                            src={Avatar}
                            alt='avatar'
                            style={{height: '250px'}}
                        />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.4rem'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true' />
                                    <span className='list-item-text'>+ (661) 343-1254</span>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.4rem'}}>
                                    <i className="fas fa-at" aria-hidden='true'/>
                                    <span className='list-item-text'>galoncyryll@gmail.com</span>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.4rem'}}>
                                    <i className="fab fa-linkedin-in" aria-hidden='true'/>
                                    <span className='list-item-text'>linkedin.com/in/cyryll-joseph-galon</span>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );   
    }
}

export default Contact;