import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
} from 'react-native'
import { MapView } from 'expo'

import {
  getCurrentLocation,
} from '../actions/map'

class Map extends Component {
  componentWillMount() {
    this.props.getCurrentLocation();
  }

  render() {
    const defaultLocation = {
      latitude: 34.0195,
      longitude: -118.4912,
    }
    const {
      latitude,
      longitude,
    } = this.props.currentLocation || defaultLocation
    console.log(latitude, longitude);

    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="Current Location"
        />
        {this.props.children}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 250,
    width: '100%',
  },
});

const mapStateToProps = ({map}) => {
  return map
}

const actions = {
  getCurrentLocation,
}

export default connect(mapStateToProps, actions)(Map)
