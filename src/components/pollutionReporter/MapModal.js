import React from 'react';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { View, Modal, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ConfirmLocationBox from './ConfirmLocationBox';
import mapStyles from './styles';
import { closeLogo } from '../../constants/images';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const DEFAULT_LATITUDE = 35.218781;
const DEFAULT_LONGITUDE = -80.828852;
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
    this.handlePressMap = this.handlePressMap.bind(this);
    this.handleCloseMap = this.handleCloseMap.bind(this);

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

  handlePressMap(event) {
    const coordinate = event.nativeEvent.coordinate;
    this.setState({
      newLatitude: coordinate.latitude,
      newLongitude: coordinate.longitude,
      displayConfirmWindow: true,
    });
  }

  handleCloseMap() {
    this.setState({ newLatitude: null, newLongitude: null }, this.props.toggleMapVisibility);
  }

  render() {
    const { newLatitude, newLongitude, displayConfirmWindow } = this.state;
    const { latitude, longitude } = this.props;
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
              loadingEnabled
              region={{
                latitude: (newLatitude || latitude || DEFAULT_LATITUDE),
                longitude: (newLongitude || longitude || DEFAULT_LONGITUDE),
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              onPress={this.handlePressMap}
            >
              <MapView.Marker
                draggable
                onDragEnd={event => this.handleDragMarker(event)}
                coordinate={{
                  latitude: (newLatitude || latitude || DEFAULT_LATITUDE),
                  longitude: (newLongitude || longitude || DEFAULT_LONGITUDE),
                }}
                anchor={{ x: 0.69, y: 1 }}
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

          {/* Close Button */}
          <TouchableOpacity
            style={mapStyles.closeMapButton}
            onPress={() => this.handleCloseMap()}
          >
            <Image
              style={[{ height: 40, width: 40 }]}
              source={closeLogo}
              resizeMode="contain"
            />
          </TouchableOpacity>

        </Modal>
      </View>
    );
  }
}

MapModal.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  updateCoordinates: PropTypes.func.isRequired,
  mapVisibility: PropTypes.bool.isRequired,
  toggleMapVisibility: PropTypes.func.isRequired,
};

export default MapModal;
