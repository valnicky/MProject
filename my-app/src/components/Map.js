import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps'
import Markers from './Markers.js'
import InfoWindow from './InfoWindow.js'
import PropTypes from 'prop-types'
import escaperegexp from 'escape-regexp'

class Map extends React.Component {
     constructor(props) {
        super(props);
        this.state = { position: {
        lat: this.lat,
        lng: this.lng
        }
      }
    }

     componentDidMount() {
  this.loadMap();
     }

loadMap() {
  if (this.props && this.props.google) {
    const{lat,lng} = this.state.position;
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
    //  const node = ReactDOM.findDOMNode(mapRef);
    }
}


      //from https://reactjs.org/docs/error-boundaries.html
componentDidCatch(error, info ) {
  //display fallback UI
  this.setState({ hasError: true});
  //log the error to an error reporting service
//  logErrorToMyService(error, info);
}


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
        
      /*   renderChildren =  () =>{
            const {children} = this.props;

            if(!children) return;

             return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.position
          }
  }}   {this.renderChildren()} */

      
    	render(){

    const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.416947, lng: -3.703529 } }
        defaultZoom = { 13 }
      >
     <Markers/>
      </GoogleMap>
   ));
    return(
      <div ref="map">
        
      
        <Map
          containerElement={ <div style={{ height: `100vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%`, width: `100%` }} /> }
          
        >
          
            <Markers />
           <Markers position= {this.position}/>




        </Map>
      <InfoWindow
          
        venues={this.props.venues}  



            />
      </div>
    );
  }
       
  
}

export default Map