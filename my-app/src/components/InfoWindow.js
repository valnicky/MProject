import React, { Component } from 'react';
import { Marker } from "react-google-maps"
//require("recompose");

class InfoWindow extends React.Component {


    //here we create an infoWindow. This is from developers.google.com/infowindow
        // infowindow = new window.google.maps.InfoWindow()


//const iconDefault = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
//const iconOpen = 'http://maps.google.com/mapfiles/ms/icons/green.png';
render(){
        return (
            <div>
              <Marker
               // icon={props.placeToShow === props.marker.title && props.isOpen ? { url: iconOpen } : { url: iconDefault }}
              //  key={props.marker.title}
                //position={{lat: props.marker.position.lat, lng: props.marker.position.lng}}
               // onClick={() => props.onToggleOpen(props.marker.title, props.marker)}
              
              //  {props.placeToShow === props.marker.title && props.isOpen &&
                 // <InfoWindow onCloseClick={props.onToggleOpen}>
                    
                //  </InfoWindow>}
              />

          </div>
            


            );

}

    }

    export default InfoWindow










    //here we create an infoWindow. This is from developers.google.com/infowindow
       //  infowindow = new window.google.maps.InfoWindow()


     /*   return (
            
              <InfoWindow
              icon={this.props.placeToShow === this.props.myVenue.venue.name && this.props.isOpen ? { url: orange } : { url: blue }}
              key={this.props.myVenue.venue.name}
              position={{lat: this.props.myVenue.venue.location.lat, lng: this.props.myVenue.venue.position.lng}}
              onClick={() => this.props.onToggleOpen(this.props.myVenue.venue.name, this.props.venue)}
              
                {this.props.placeToShow === this.props.myVenue.venue.name && this.props.isOpen &&
                 
                 onCloseClick={this.props.onToggleOpen}
                 >
                    
                 </InfoWindow>}
              

        
            


            );*/




   