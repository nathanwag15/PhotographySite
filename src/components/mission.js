import React, { Component } from 'react';


export default class Mission extends Component {
          render() {
            return (
              <div className="gallery-wrapper">
                  <div className="block-wrapper">
                      <div className="left-column-wrapper">
                            <img src={utah1} />
                            <img src={utah2} />
                            <img src={utah3} />
    
                      </div>
                      <div className="right-column-wrapper">
                            <img src={utahColumn1} />
                            <img src={utah4} />
                      </div>
                  </div>
               
              </div>
            );
          }
    }

