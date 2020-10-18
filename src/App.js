import React, { Component } from 'react';
import './resources/styles.css';
import Pricing from './Component/Pricing'
import Header from './Component/Header_Footer/Header'
import VenueInfo from './Component/VenueInfo'
import Highlight from './Component/Highlights'
import Featured from './Component/Featured'
import Location from './Component/Location'
import Footer from './Component/Header_Footer/Footer'
import { Element } from 'react-scroll';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueinfo">
        <VenueInfo/>
        </Element>

        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>
        
        <Element name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
