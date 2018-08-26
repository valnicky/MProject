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