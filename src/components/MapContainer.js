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
      stores: [
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
    this.draw = this.draw.bind(this);
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index}
      draggable={true}
       position={{
         lat: store.latitude,
          lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }


    draw(mapProps, map, e)
  {
    const latlong  = {latitude: e.latLng.lat(), longitude: e.latLng.lng()}
    //console.log(e.latLng.lat(), e.latLng.lng())
  console.log(this.state.stores)
  this.setState({ stores:[...this.state.stores,latlong]} )
  }
  render() {
  
    return (
        <Map
          onClick={this.draw}
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
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