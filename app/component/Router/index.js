import React from 'react';
import {NavLink} from 'react-router-dom';
import {HashRouter as Router, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import About from '../../pages/About';

export default class ReactRouter extends React.Component{

    render () {
        return (
            <div>
                <Router>
                    <ul className="nav-bar">
                        <li><NavLink to='/home'>home</NavLink></li>
                        <li><NavLink to='/about'>about</NavLink></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Router>
            </div>
        )
    }
}