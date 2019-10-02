import React, { Component } from 'react';
import { CreditPopup } from './Popups'
import whirl from '../img/whirl.jpg'
import './intro.css'


export class Intro extends Component {
  render() {
    return (
      <div>
        <div class="d-flex flex-column bd-highlight mb-3 intro-bg">
          <div class="flex-fill align-self-center">
          <div className="container text-center">
              <h3 className="display-4" id="introText">Welcome to</h3>
              <h1 className="display-1" id="introText">Spice Whirls</h1>
              <img src={whirl} className="rounded-circle img-fluid" id="introIMG"/>
            </div>
          </div>
          <div class="ml-auto p-2 bd-highlight">
            <CreditPopup credit={<a id="photoCredit" href='https://unsplash.com/@nevenkrcmarek'>Photos by Neven Krcmarek on Unsplash</a>}/>
          </div>
        </div>
      </div>
    )
  }
}
