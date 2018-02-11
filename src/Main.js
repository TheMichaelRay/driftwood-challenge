import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { Constants } from 'expo'

import Map from './components/Map'

class Main extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Map</Text>
        <Map />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fff',
    color: '#999',
    fontSize: 32
  },
});

const mapStateToProps = ({maps}) => {
  return {
  }
}

const actions = {
}

export default connect(mapStateToProps, actions)(Main)
