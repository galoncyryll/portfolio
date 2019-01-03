import React, { Component } from 'react';
import { Layout, Header, Drawer, Content, Navigation, Switch } from 'react-mdl';
import Main from './components/main/main';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className='header-color' title="CG" scroll>
                    <Navigation>
                      <p>Theme</p><Switch id="switch2" defaultChecked></Switch>
                    </Navigation>
                </Header>
                    <Drawer title="CG">
                      <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">AboutMe</Link>
                        <Link to="/contact">Contact</Link>
                      </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
              </Layout>
          </div>       
    );
  }
}

export default App;
