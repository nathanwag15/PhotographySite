import React, { Component } from 'react';
import utah1 from '../../static/assets/images/20210506_142440.jpg';
import utah2 from '../../static/assets/images/20210506_175907.jpg';
import utahColumn1 from '../../static/assets/images/20210501_193345.jpg';

export default class Utah extends Component {
    render() {
        return (
          <div className='utah-gallery-wrapper'>
              <div className="block-wrapper">
                  <div className="left-column-wrapper">
                        <img src={utah1} />
                        <img src={utah2} />
                  </div>
                  <div className="right-column-wrapper">
                        <img src={utahColumn1} />
                  </div>
              </div>
           
          </div>
        );
      }
}

