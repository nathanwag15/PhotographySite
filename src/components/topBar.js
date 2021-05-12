import React, { Component } from 'react';
import Menu from './menu';

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