import React from 'react';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { View, Modal, StyleSheet, Dimensions } from 'react-native';
import ConfirmLocationBox from './ConfirmLocationBox';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragMarker = this.handleDragMarker.bind(this);
    this.updateLocationAndExit = this.updateLocationAndExit.bind(this);
    this.toggleConfirmWindow = this.toggleConfirmWindow.bind(this);

    this.state = {
      newLatitude: null,
      newLongitude: null,
      displayConfirmWindow: false,
    };
  }

  handleDragMarker(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    this.setState({
      newLatitude: latitude,
      newLongitude: longitude,
      displayConfirmWindow: true,
    });
  }

  toggleConfirmWindow() {
    this.setState({ displayConfirmWindow: !this.state.displayConfirmWindow });
  }

  updateLocationAndExit(lat, lng) {
    this.props.updateCoordinates(lat, lng);
    this.toggleConfirmWindow();
    this.props.toggleMapVisibility();
  }

  render() {
    const { newLatitude, newLongitude, displayConfirmWindow } = this.state;
    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.mapVisibility}
          onRequestClose={() => this.props.toggleMapVisibility()}
        >
          <View style={styles.container}>
            <MapView
              style={styles.map}
              region={{
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
            >
              <MapView.Marker
                draggable
                onDragEnd={event => this.handleDragMarker(event)}
                coordinate={{
                  latitude: this.props.latitude,
                  longitude: this.props.longitude,
                }}
              />
            </MapView>
          </View>

          {
            displayConfirmWindow &&
            <ConfirmLocationBox
              lat={newLatitude}
              lng={newLongitude}
              toggleConfirmWindow={this.toggleConfirmWindow}
              updateLocationAndExit={this.updateLocationAndExit}
            />
          }
        </Modal>
      </View>
    );
  }
}

MapModal.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  updateCoordinates: PropTypes.func.isRequired,
  mapVisibility: PropTypes.bool.isRequired,
  toggleMapVisibility: PropTypes.func.isRequired,
};

export default MapModal;
