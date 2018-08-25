import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class Markers extends React.Component {
	var markers = this.props.marker;
	return (
		markers.addMarker(new OpenLayers.Marker(lonLat));
    
    map.setCenter (lonLat, zoom);
		)
	}



export default Markers;