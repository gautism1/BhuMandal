/* global google */
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '40%',   height: '50%',
 
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      stores: {
        latitude:props.coordinates.latitude,
        longitude:props.coordinates.longitude
      }
      
    }
  }
 
  displayMarkers = () => {
   
    return <Marker 
      draggable={true}
       position={{
         lat: this.state.stores.latitude,
          lng: this.state.stores.longitude
     }}
     />
  }
  draw(mapProps, map, e)
  {
    const latlong  = {latitude: e.latLng.lat(), longitude: e.latLng.lng()}
  this.setState({stores:latlong })
  this.props.setCoordinates(latlong)
  }
  render() {
   
    return (
        <Map 
         onLoad ={this.draw}
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.state.stores.latitude, lng: this.state.stores.longitude}}
          draggable={true}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAiX3P6BRNeus6IjocItBzZ1iqwdPNU_tA'
})(MapContainer);