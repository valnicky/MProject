import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class Markers extends React.Component {
	//var markers = this.props.markers;

renderMarker() {
    let {
      map, google, position, mapCenter
    } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
    
  }
	 
	render() {
    return null;

		/*const Marker = new window.google.maps.Marker(
				position:{lat: props.marker.position.lat, lng: props.marker.position.lng},
				
				title: 'hello'


			);

		markers.addMarker(new OpenLayers.Marker(lonLat));
    
    	map.setCenter (lonLat, zoom);*/
	//	<Markers 
    	 		//markers = {this.markers}
    	 	//	key={props.marker.title}
                //position= this.Marker.position
    	 	

/*
    	 	key={this.props.index} position={{
lat: this.props.lat,
lng: this.props.lng
}} label={this.props.index.toString()}
onClick={() => this.handleClicks(this.props.venueID)}
>

        {
          this.state.isOpen &&

          <InfoWindow onCloseClick={() => this.setState({isOpen: false})}>
              <div>
                <h4>{this.props.location.venue.name}</h4>
                <img src={`${venuePhoto}`}/>
                <span>{number}</span>
              </div>
            </InfoWindow>

        }*/
		
    	/* return (
    
				markers.addMarker(new OpenLayers.Marker(lonLat));
    
    			map.setCenter (lonLat, zoom);
		)*/
	}

}

/*Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}*/

export default Markers;