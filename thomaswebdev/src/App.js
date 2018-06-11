import React, { Component } from 'react';
import Banner from './components/Banner/Banner'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Contact from './components/Contact/Contact'

class App extends Component {

contactClickHandler = (event) => {
  console.log(event)
}

  render() {
    return (

      <div>
        <Banner />
        <Title />
        <Container />
      </div>
    );
  }
}


export default App;
