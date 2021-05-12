import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
          <div className='menu-wrapper'>
              <NavLink exact to ="/" activeClassName="nav-link-active">
                Home
              </NavLink>
              <NavLink exact to="/utah" activeClassName="nav-link-active">
                Utah
              </NavLink>
              <NavLink to='/mission' activeClassName="nav-link-active">
                Mission
              </NavLink>
              <NavLink to='/about-me' activeClassName="nav-link-active">
                About Me
              </NavLink>
          </div>
        );
      }
}