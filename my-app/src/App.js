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
       this.renderMap()
 
  }

  renderMap = () => {
     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ&callback=initMap")
    window.initMap = this.initMap
  }  

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
      console.log("ERROR!! " + error)
    })
  }


  initMap = () => {
      //we create a map here. This is from https://developers.google.com/maps/documentation/javascript/adding-a-google-map#map
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 40.416947, lng: -3.703529}
      });

    //here we create an infoWindow. This is from developers.google.com/infowindow
          var infowindow = new window.google.maps.InfoWindow()


    /*looping over venues inside the state, display dynamic markers*/
    this.state.venues.map(myVenue => {
          
           var contentString = `${myVenue.venue.name}`


      //here we create a marker. This is from https://developers.google.com/maps/documentation/javascript/markers
        var  marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      });

     //when we click on our marker this function 'open' will be executed. This is from https://developers.google.com/maps/documentation/javascript/infowindows
         marker.addListener('click', function() {

          //we set the new content
          infowindow.setContent(contentString)

          //open infowindow
          infowindow.open(map, marker);
      });

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
        <img src={hamburger} className= "hamburger" alt="hamburger"/>
        <div id='map'></div> 
      
      </main>
    );
  }


}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default App; 