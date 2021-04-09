/* global google */
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '50%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: {
        latitude:28.7041,
        longitude:77.1025
      }
    }
    this.draw = this.draw.bind(this);
  }

  displayMarkers = () => {
    
      return <Marker 
      draggable={true}
       position={{
         lat: this.state.stores.latitude,
          lng: this.state.stores.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
  }


    draw(mapProps, map, e)
  {
    const latlong  = {latitude: e.latLng.lat(), longitude: e.latLng.lng()}
    
  this.setState({stores:latlong })
  console.log(this.state.stores)
  }
  render() {
  
    return (
        <Map
          onClick={this.draw}
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.state.stores.latitude, lng:  this.state.stores.longitude}}
          editable={true}
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