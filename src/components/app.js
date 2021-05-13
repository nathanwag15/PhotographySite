import React, { Component } from 'react';
import TopBar from './topBar';
import MainPage from './mainPage';
import Utah from './utah';
import Mission from './mission';
import AboutMe from './about-me';

import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <TopBar/>
        <Switch>
            <Route path="/utah" component={Utah} />
            <Route exact path="/" component={MainPage} />
            <Route path="/mission" component ={Mission} />
            <Route path="/about-me" component={AboutMe} />
        </Switch>
      </div>
    );
  }
}
