import React, { Component } from 'react';
import { Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '30%',
   height:'50%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 27.4924 ,
            lng: 77.6737
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAiX3P6BRNeus6IjocItBzZ1iqwdPNU_tA'
})(MapContainer);