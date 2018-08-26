import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps'
import Markers from './Markers.js'
import InfoWindow from './InfoWindow.js'
import PropTypes from 'prop-types'
import escaperegexp from 'escape-regexp'

class Map extends Component {
     /* constructor(props) {
        super(props);
        this.state = { hasError: false};
      }

     

      from https://reactjs.org/docs/error-boundaries.html
componentDidCatch(error, info ) {
  //display fallback UI
  this.setState({ hasError: true});
  //log the error to an error reporting service
  logErrorToMyService(error, info);
}*/


 /* state = {
      locations: [
        { name: "Plaza Mayor", location: { lat: 40.415363, lng: -3.707398 }},
        { name: "Retiro Park", location: { lat: 40.414335, lng: -3.680908 }},
        { name: "Santiago Bernabeu Stadium", location: { lat: 40.453054, lng:  -3.688344 }},
        { name: "Royal Palace", location: { lat: 40.41749833, lng: -3.7173305 }},
        { name: "Dragon La Elipa", location: { lat: 40.423488, lng: -3.657005 }},
        { name: "Prado Museum", location: { lat:  40.413780, lng: -3.692127 }},
        { name: "Plaza Puerta del Sol", location: { lat: 40.416729, lng:  -3.703339 }},
        { name: "Atocha", location: { lat:  40.398396, lng: -3.681477 }}
  
  
 /* ,{
    "title": "Gran_Via",
    "name": "Gran Via",
    "position": {
      "lat": 40.42,
      "lng": -3.70361
    }
  },
  {
    "title": "Madrid_Rio",
    "name": "Madrid Rio",
    "position": {
      "lat": 40.398033,
      "lng": -3.710935
    }
  },
  {
    "title": "Vicenta_Calderon_Stadium",
    "name": "Vicente Calderon Stadium",
    "position": {
      "lat": 40.401726,
      "lng": -3.720635
    }
  },
  {
    "title": "Plaza_de_Toros_de_las_Ventas",
    "name": "Plaza de Toros de las Ventas",
    "position": {
      "lat":  40.432100,
      "lng":  -3.663307
    }
  },
  {
    "title": "Aquarium_Zoo",
    "name": "Aquarium Zoo",
    "position": {
      "lat": 40.408979, 
      "lng":  -3.761461
    }
  },
  {
    "title": "Amusement_Park",
    "name": "Amusement Park",
    "position": {
      "lat": 40.411861, 
      "lng": -3.750089 
    }
  },
  {
    "title": "WiZink_Center",
    "name": "WiZink Center",
    "position": {
      "lat": 40.423873,
      "lng": -3.671982 
    }
  },
  {
    "title": "Botanical_Garden",
    "name": "Botanical Garden",
    "position": {
      "lat": 40.411106, 
      "lng": -3.691127 
    }
  },
  {
    "title": "Natural_Science_Museum",
    "name": "Natural Science Museum",
    "position": {
      "lat": 40.441017, 
      "lng": -3.689690 
    }
  },
  {
    "title": "Cultural_Center_Conde_Duque",
    "name": "Cultural Center Conde Duque",
    "position": {
      "lat": 40.427407, 
      "lng": -3.710720 
    }
  },
  {
    "title": "Museo_Arquelogico",
    "name": "Museo Arqueologico",
    "position": {
      "lat": 40.423553,
      "lng": -3.689402 
     }
    },
    {
    "title": "Madrid_Arena",
    "name": "Madrid Arena",
    "position": {
      "lat": 40.413010,
      "lng": -3.738209 
    }
  },
   {
    "title": "Cultural_Center_Matadero",
    "name": "Cultural Center Matadero",
    "position": {
      "lat": 40.391662,
      "lng": -3.697589 
    }
  }, {
    "title": "Casa_de_Campo_Park",
    "name": "Casa de Campo Park",
    "position": {
      "lat": 40.419742,
      "lng": -3.748837 
    }
  }, {
    "title": "Faunia",
    "name": "Faunia",
    "position": {
      "lat": 40.392037,
      "lng": -3.612420 
    }
  }, {
    "title": "Planetarium",
    "name": "Planetarium",
    "position": {
      "lat": 40.392619,
      "lng": -3.685267 
    }
  }, {
    "title": "Park_Quinta_de_los_Molinos",
    "name": "Park Quinta de los Molinos",
    "position": {
      "lat": 40.441573,
      "lng": -3.627135 
    }
  }

      ],
      query: '',
      markers: [],
      infoWindow: new this.props.google.maps.InfoWindow()


      

  }

*/



onClick = (props, marker, e) => {
  this.setState({
      location: props,
      markerActive: marker,
      showInfo: true
  })
}

        

/*
key={index}
lat={lat}
            lng={lng}
            index={index}
            location={location}
            indexValue={index}
            venueID={venueID}*/
        
          
    

      
    	render(){

    const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.416947, lng: -3.703529 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
    return(
      <div>
        <Map
          containerElement={ <div style={{ height: `100vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%`, width: `100%` }} /> }
        />
    
      <InfoWindow
          
        venues={this.props.venues}  



            />
      </div>
    );
  }
       
  
}

export default Map