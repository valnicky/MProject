import React, { Component } from 'react';
import logo from './logo.svg';
import hamburger from './Hamburger_icon.svg';
import './App.css';
import './index.css';
import Map from './components/Map.js'
import axios from 'axios'
import ListView from './components/ListView.js'
import SearchBar from './components/SearchBar.js'

class App extends Component {
  state = {
    venues: []
  }
   
  componentDidMount() {
       this.getVenues()
       /*this.renderMap()*/
 
  }

  /*renderMap = () => {
     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ&v=3&callback=initMap")
    window.initMap = this.initMap
  }  
*/
  /*getVenues from axios*/
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "SEVDSWXLYP1YMSO1TCUSW0MKDVMC2E4YWUMQDOURYLQNI2MJ",  /*foursquare keys*/
      client_secret: "LTLB2BI24EWW2ITXWMGJISPWLD1H2AUUUALL0ONY5VCVXJO0",
      /* parameters https://developer.foursquare.com/docs/api/venues/explore*/
      query: "coffee",
      near: "Madrid",
      v:"20180323"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
       //console.log(response.data.response.groups[0].items)
        this.setState({
          /*we store in the venues state the data*/
          venues: response.data.response.groups[0].items  

        })//, this.renderMap()
    
    }).catch(error => {
      console.log("ERROR! - " + error)
    })
  }


 

  render() {
    return (
      <main className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>MADRID</h1>
            <h2 className="App-title">My Neighborhood</h2>
              <SearchBar/>
           
              <ListView/>

        </header>
        <img src={hamburger} onClick="toggleHam()" className= "hamburger" alt="hamburger"/>
        <Map/>
      </main>
    );
  }


}



export default App; 