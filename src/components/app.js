import React, { Component } from 'react';
import TopBar from './topBar';
import MainPage from './mainPage';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <TopBar/>
        <MainPage /> 
      </div>
    );
  }
}
