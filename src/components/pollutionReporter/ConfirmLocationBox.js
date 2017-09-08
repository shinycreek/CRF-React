import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, Dimensions } from 'react-native';
import styles from './styles';

const width = Dimensions.get('window').width;

class ConfirmLocationBox extends React.Component {
  render() {
    const { lat, lng } = this.props;
    return (
      <View style={[styles.confirmBoxContainer, { width }]}>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: '#000' }}>Use selected location?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              onPress={() => this.props.updateLocationAndExit(lat, lng)}
              title="Ok"
              color="#999"
            />
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              onPress={() => this.props.toggleConfirmWindow()}
              title="Cancel"
              color="#999"
            />
          </View>
        </View>
      </View>
    );
  }
}

ConfirmLocationBox.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  toggleConfirmWindow: PropTypes.func.isRequired,
  updateLocationAndExit: PropTypes.func.isRequired,
};

export default ConfirmLocationBox;
