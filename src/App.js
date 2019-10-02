import React, { Component } from 'react';
import { Navbar } from './Components/Navbar'
import { Intro } from './Components/Intro'
import { About } from './Components/About'
import { Menu } from './Components/Menu'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <About />
        <Menu />
        <Contact />
        <Footer />
      </div>
    )
  }
}
