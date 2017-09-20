import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import ScalableText from 'react-native-text';
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
            <ScalableText style={styles.textFontStyle}>
              Thank you for downloading Water Watcher! Our volunteer network is crucial to helping
              us protect the Catawba-Wateree River we all enjoy and depend on.
            </ScalableText>
            <ScalableText style={styles.textFontStyle}>
              Please fill out contact info to autofill those fields in reports where we might need
              to follow up with you.
            </ScalableText>
            <ScalableText style={styles.textFontStyle}>
              Contact us if you have any questions. We also hope you will join the Catawba
              Riverkeeper! Our full-time staff and work are supported by hundreds of memberships
              throughout the basin! Donations are tax-deductible.
            </ScalableText>
            <ScalableText style={styles.textFontStyle}>
              In the app, click on the settings gear to change your contact info, see our contact
              info and click a link to become a member and support clean water!
            </ScalableText>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={toggleGreetingVisibility}>
            <View style={styles.button}>
              <ScalableText style={styles.buttonFontStyle}>Skip for Now</ScalableText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contactInfoButton]}
            onPress={() => handlePressContactInfo()}
          >
            <View style={styles.button}>
              <ScalableText style={styles.buttonFontStyle}>Enter Contact Info</ScalableText>
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
