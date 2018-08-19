import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render(){

  	const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.416947, lng: -3.703529 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `100vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%`, width: `100%` }} /> }
        />
      </div>
    );
  }
};
export default Map;