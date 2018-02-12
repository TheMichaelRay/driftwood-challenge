import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Alert,
} from 'react-native'
import { MapView } from 'expo'
import ClusterMapView from 'react-native-map-clustering'

import {
  saveLocation,
  deleteLocation,
} from '../actions/map'

class Map extends Component {
  onLongPress({nativeEvent}) {
    const { coordinate } = nativeEvent
    this.props.saveLocation(coordinate)
  }

  onMarkerPress(location) {
    Alert.alert(
      'Delete Marker?',
      '',
      [
        {
          text: 'Delete',
          onPress: () => this.props.deleteLocation(location)
        },
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {},
        },
      ]
    )
  }

  renderMarkers() {
    const { locations } = this.props
    const { Marker } = MapView
    const markers = locations.map(location => {
      const key = `${location.latitude}${location.longitude}`
      return (
        <Marker
          key={key}
          onPress={() => this.onMarkerPress(location)}
          coordinate={location}
        />
      )
    })
    return markers
  }

  render() {
    const initialRegion = {
      latitude: 34.0195,
      longitude: -118.4912,
      latitudeDelta: 0.09,
      longitudeDelta: 0.09,
    }
    return (
      <ClusterMapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={initialRegion}
        onLongPress={this.onLongPress.bind(this)}
        radius={10}
      >
        {this.renderMarkers()}
      </ClusterMapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});

const mapStateToProps = ({map}) => {
  return {
    locations: map.locations
  }
}

const actions = {
  saveLocation,
  deleteLocation,
}

export default connect(mapStateToProps, actions)(Map)
