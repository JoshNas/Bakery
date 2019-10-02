import React, { Component } from 'react';
import { CreditPopup } from './Popups'
import './about.css'

var description = 'Try our delecious pastries and fresh brewed coffees!'

export class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="d-flex flex-column bd-highlight mb-3 about-bg">
          <div className="flex-fill align-self-center">
          <div className="container text-center">
              <h1 className="display-4">{description}</h1>
            </div>
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <CreditPopup credit={<a id="photoCredit" href="https://unsplash.com/@karishea">Photo by Kari Shea on Unsplash</a>}/>
          </div>
        </div>
      </div>
    )
  }
}
