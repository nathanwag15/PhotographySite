import React, { Component } from 'react';
import Menu from './menu';
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
    render() {
        return (
          <div className='top-bar-wrapper'>
            <div className='accent-bar-top'></div>
            <div className='top-bar-content'>
                <Menu />
                <h1>Nate's Photography </h1>
            </div>
          </div>
        );
      }
}