import React, { Component } from 'react';
import infowindow from 'InfoWindow'


class InfoWindow extends React.Component {


const iconDefault = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
const iconOpen = 'http://maps.google.com/mapfiles/ms/icons/green.png';

        return (
            <div>
              <Marker
                icon={props.placeToShow === props.marker.title && props.isOpen ? { url: iconOpen } : { url: iconDefault }}
                key={props.marker.title}
                position={{lat: props.marker.position.lat, lng: props.marker.position.lng}}
                onClick={() => props.onToggleOpen(props.marker.title, props.marker)}
              >
                {props.placeToShow === props.marker.title && props.isOpen &&
                  <InfoWindow onCloseClick={props.onToggleOpen}>
                    
                  </InfoWindow>}
              </Marker>

            </div>


            )


    }

    export default InfoWindow