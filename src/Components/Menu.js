import React  from 'react'
import ModalImage from "react-modal-image";
import menu1 from '../img/menu1.png'
import menu1Big from '../img/menu1Big.png'
import './menu.css'

var menuDescription = 'Our exciting menu of delecious desserts'

export const Menu = () => (
  <div className="container" id="menu">
    <h3 className="col text-center">Menu</h3>
    <p className="col text-center lead">{menuDescription}</p>
    <div className="row menuContainer" >
      <div className="col-md-4">
        <ModalImage small={menu1} large={menu1Big} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu1} large={menu1Big} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu1} large={menu1Big} className="menuImage"/>
      </div>
    </div>
    <div className="container text-center">
    </div>
  </div>
)
