import React, { Component } from 'react';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="row">
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>

      </div>
    );
  }
}


export default App;
