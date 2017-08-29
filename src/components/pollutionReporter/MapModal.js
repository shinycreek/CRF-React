import React from 'react';
// import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { View, Modal, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 50,
  },
});

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    alert('closed');
    // this.props.setRegion();
    // this.props.toggleMapVisibility();
  }

  render() {
    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible // ={this.props.mapVisibility}
          onRequestClose={() => this.handleCloseModal()}
        >
          <View style={styles.container}>
            <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

// MapModal.propTypes = {
//   region: PropTypes.instanceOf(Object).isRequired,
//   updateRegion: PropTypes.func.isRequired,
//   mapVisibility: PropTypes.bool.isRequired,
//   toggleMapVisibility: PropTypes.func.isRequired,
// };

export default MapModal;
