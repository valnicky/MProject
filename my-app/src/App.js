import React, { Component } from 'react';
import logo from './logo.svg';
import hamburger from './Hamburger_icon.svg';
import './App.css';
import './index.css';
import Map from './components/Map.js'
//import Markers from './components/Markers.js'
//import infoWindow from './components/InfoWindow.js'
import axios from 'axios'
import ListView from './components/ListView.js'
import SearchBar from './components/SearchBar.js'
//import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import ReactDOM from 'react-dom'


class App extends Component {
    constructor(props) {
      super(props);
      this.state = { mapIsReady : false}
    }

componentDidMount() {
    const ApiKey = 'AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.setState({ mapIsReady: true });
    });

    document.body.appendChild(script);
  }

   componentDidUpdate() {
    if (this.state.mapIsReady) {
      // Display the map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 12,
        mapTypeId: 'roadmap',
      });
      // You also can add markers on the map below
    }
  }

  state = {
    venues: []
    /*defaultZoom: 13,
    defaultCenter: { lat: 40.416947, lng: -3.703529 },
    markers: [],
    query: '',*/
   // infoContent: ""
  }
   
  componentDidMount() {
       this.getVenues()
      // document.querySelector('.hamburger').classList.toggle('expandMenu-hidden')
    
      //  this.addMarkers()
  }

renderMap = () => {
  // loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ&v=3&callback=initMap")
    window.initMap = this.initMap
}



 initMap= () => {
    var latlng = new window.google.maps.LatLng(40.416947,  -3.703529 );
    
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: latlng,
      //{lat: 40.416947, lng: -3.703529  },
      zoom: 13
    })

    //crete an infoWindow
    var infowindow = new window.google.maps.InfoWindow()

    //we display the markers
  this.state.venues.map (myVenue => {
      var contentString = `${myVenue.venue.name}`

    //create a marker
    var marker = new window.google.maps.Marker({
              position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
              map: map,
              draggable: true,
              animation: window.google.maps.Animation.DROP,
              title: myVenue.venue.name
    })


    //when we click on our marker this function 'open' will be executed. This is from https://developers.google.com/maps/documentation/javascript/infowindows
         marker.addListener('click', function() {

                //we set the new content, we change it
                infowindow.setContent(contentString)

                //open infowindow
                infowindow.open(map, marker);


          })
    })
}



 
  /*Foursquare API and getVenues from axios*/
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "SEVDSWXLYP1YMSO1TCUSW0MKDVMC2E4YWUMQDOURYLQNI2MJ",  /*foursquare keys*/
      client_secret: "LTLB2BI24EWW2ITXWMGJISPWLD1H2AUUUALL0ONY5VCVXJO0",

      /* parameters from https://developer.foursquare.com/docs/api/venues/explore*/
     // section: "coffee",
      query: "food",
      near: "Madrid",
      v:"20180323"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
       //console.log(response.data.response.groups[0].items)
        this.setState({
          /*we store in the venues state the data*/
          venues: response.data.response.groups[0].items  

        }, this.renderMap()
        )
    
    }).catch(error => {
      console.log("An ERROR has occurred! - " + error)
    })
   
  }


 
/*
addMarkers = () => {

             var neighMark = [];
          function drop() {
          clearMarkers();
            for (var i = 0; i < neighMark.length; i++) {
                  addMarkerWithTimeout(neighMark[i], i * 200);
            }


        function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
              marker.push(new window.google.maps.Marker({
                position: position,
                map: this.map,
                animation: window.google.maps.Animation.DROP
              }));
            }, timeout);
      }

      function clearMarkers() {
        for (var i = 0; i < marker.length; i++) {
          marker[i].setMap(null);
        }
        marker = [];
      }

      

    }
    
  }
*/






//mapFail = () => {alert(`Google Maps API - could not loaded!`); }


 
  
  



 
  toggleHam = () => {
       

        if(document.getElementByTagName("HEADER")[0].style.display == 'none') {
              document.getElementByTagName("HEADER")[0].setAtribute("display","block");
      } else {
              document.getElementByTagName("HEADER")[0].setAtribute("display", 'none'); 
      }
   
    }


 

/*

 mapFail = () => {
    alert(`Google Maps API - could not loaded!`);
  }
*/


/*var image = {
  url: place.icon,
  size: new window.google.maps.Size(71, 71),
  origin: new window.google.maps.Point(0, 0),
  anchor: new window.google.maps.Point(17, 34),
  scaledSize: new window.google.maps.Size(25, 25)
};




*/



 /* showingMarkers = this.state.markers.filter((myMarker) => {
                console.log(myMarker.getElement().data.toLowerCase());
               // return(match.test(myMarker.getElement().data.toLowerCase())
              // )
            }*/

  render() {
    return (
      <main className="App" role="mainContainer">
          <header className="App-header" id="app-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>MADRID</h1>
              <h2 className="App-title">My Neighborhood</h2>
                <SearchBar/>
             
                <ListView/>
                
                
          </header>
          <img src={hamburger} onClick= {this.toggleHam} className= "hamburger" alt="hamburger"/>
          <Map id="map"
              infoContent={this.state.infoContent}

          />

      </main>
    );
  }



}


function loadScript (url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}


/* //"https://maps.googleapis.com/maps/api/js?key=AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ&v=3"
 
*/

export default App; 