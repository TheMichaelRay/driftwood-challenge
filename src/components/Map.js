import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import { MapView } from 'expo'

export default class Map extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 34.0195,
          longitude: -118.4912,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 250,
    width: '100%',
  },
});
