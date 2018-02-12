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
  render() {
    const initialRegion = {
      latitude: 34.0195,
      longitude: -118.4912,
      latitudeDelta: 0.09,
      longitudeDelta: 0.09,
    }
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={initialRegion}
      >
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
