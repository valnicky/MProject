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
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';
import ReactDOM from 'react-dom'


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
            // mapIsReady : false,
            
             showingPlaces: [],
             data: [],
             query: '' 
           }
    }


   componentDidUpdate() {
    if (this.state.mapIsReady) {
      // Display the map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 12,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      });
     
    }
  }

  state = {
    venues: [],
    /*defaultZoom: 13,
    defaultCenter: { lat: 40.416947, lng: -3.703529 },
    markers: [],*/
    query: '',
    infoContent: ""
  }
   
  componentDidMount() {
        this.getVenues()
        //this.addMarkers()

  }

renderMap = () => {
  // loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ&v=3&callback=initMap")
    window.initMap = this.initMap
}


 initMap= () => {

      // The location of Uluru
  var uluru = {lat: 40.416447, lng: -3.702529 };
  // The map, centered at Uluru
  var map = new window.google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new window.google.maps.Marker({position: uluru, map: map});



    //var latlng = new window.google.maps.LatLng(40.416947,  -3.703529 );
    
  //  var map = new window.google.maps.Map(document.getElementById('map'), {
    //  center: latlng,
      //{lat: 40.416947, lng: -3.703529  },
  //    zoom: 13
 //   })

    //crete an infoWindow
    var infowindow = new window.google.maps.InfoWindow()

    //we display the markers
  this.state.venues.map (myVenue => {
      var contentString = `${myVenue.venue.name}`

 
    //create a marker
   /* var marker = new window.google.maps.Marker({
              //position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
              position: {lat:40.416447, lng: -3.702529 },
              map: map,
              draggable: true,
              animation: window.google.maps.Animation.DROP,
              title: "My Marker"
              //myVenue.venue.name
    });*/


    //when we click on our marker this function 'open' will be executed. This is from https://developers.google.com/maps/documentation/javascript/infowindows
         marker.addListener('click', function() {

                //we set the new content, we change it
                infowindow.setContent(contentString)

                //open infowindow
                infowindow.open(map, marker);
              
                //animation from https://developers.google.com/maps/documentation/javascript/examples/marker-animations
                if(marker.getAnimation() !== null) {
                  marker.setAnimation(null) ;
                } else {
                  marker.setAnimation(window.google.maps.Animation.BOUNCE);
                }
        })
    })
}


/*
var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

*/

//update state function
updateQuery = (query)=>{
  this.setState({query: query})
}

//a reset function
clearQuery = ()=>{
  this.setState({query: '' })
}
 
  /*Foursquare API and getVenues from axios*/
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "SEVDSWXLYP1YMSO1TCUSW0MKDVMC2E4YWUMQDOURYLQNI2MJ",  /*foursquare keys*/
      client_secret: "LTLB2BI24EWW2ITXWMGJISPWLD1H2AUUUALL0ONY5VCVXJO0",

      /* parameters from https://developer.foursquare.com/docs/api/venues/explore*/
      section: "coffee",
      query: '',
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
      alert("An ERROR has occurred! - " + error)
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






  var marker, i;
for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    label: String(locations[i][3])
  });
  gmarkers.push(marker);
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
$('#list li').each(function(i, e) {
  $(e).click(function(i) {
    return function(e) {
      google.maps.event.trigger(gmarkers[i], 'click');
    }
  }(i));
});
*/



gm_authFailure = () => {alert(`Google Maps API - could not loaded!`); }




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
          <div className="App-header" id="app-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>MADRID</h1>
              <h2 className="App-title">My Neighborhood</h2>
                <SearchBar/>
             
                <ListView/>
                
          </div>
        
          <Map id="map"
              infoContent={this.state.infoContent}

          />


      </main>
    );
  }





}





/* //"https://maps.googleapis.com/maps/api/js?key=AIzaSyDzBxakJgyoP72UvsoJ6F-lpWCSGKl20IQ&v=3"
//function loadScript (url) {
 //   var index = window.document.getElementsByTagName("script")[0]
  //  var script = window.document.createElement("script")
   // script.src = url

   
 //   index.parentNode.insertBefore(script, index)
//}
  //script.async = true
   // script.defer = true
*/

export default App; 

