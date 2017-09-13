import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { greetingLogo } from '../../constants/images';

const Greeting = ({ greetingVisibility, toggleGreetingVisibility }) => {
  const handlePressContactInfo = () => {
    toggleGreetingVisibility();
    Actions.userSetting();
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={greetingVisibility}
      onRequestClose={toggleGreetingVisibility}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={{ flex: 1, resizeMode: 'contain' }}
              source={greetingLogo}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textFontStyle}>
              Thank you for downloading the Water Watcher app! Our volunteer network is crucial to
               helping us protect the Catawba-Wateree River we all enjoy and depend on.
            </Text>
            <Text style={styles.textFontStyle}>
              Please fill out contact info on the next page to help autofill reporting tools where
               we might need to follow up with you.
            </Text>
            <Text style={styles.textFontStyle}>
              Contact us if you have any questions. We also hope you will join the Catawba
               Riverkeeper Foundation! Our full-time staff and work are supported by hundreds
                of memberships throughout the basin! Donations are tax-deductible.
            </Text>
            <Text style={styles.textFontStyle}>
              In the app, click on the settings gear to change your contact info, see our contact
               info and click a link to become a member and support clean water!
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={toggleGreetingVisibility}>
            <View style={styles.button}>
              <Text style={styles.buttonFontStyle}>Skip for Now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contactInfoButton]}
            onPress={() => handlePressContactInfo()}
          >
            <View style={styles.button}>
              <Text style={styles.buttonFontStyle}>Enter Contact Info</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

Greeting.propTypes = {
  greetingVisibility: PropTypes.bool.isRequired,
  toggleGreetingVisibility: PropTypes.func.isRequired,
};

export default Greeting;
