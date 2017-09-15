import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import Footer from '../../components/footer/';
import BackgroundImage from '../../components/appBackground/';

const ContactInfo = () => (
  <BackgroundImage>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTextFontStyle}>Version 1.0</Text>

      <Text style={styles.infoTextFontStyle}>
        Catawba Riverkeeper Foundation{'\n'}
        715 N. Church St, Suite 120{'\n'}
        Charlotte, NC 28202{'\n'}
        704-679-9494{'\n'}
        CRF@CatawbaRiverkeeper.org
      </Text>

      <Text style={styles.infoTextFontStyle}>
        CRF is membership supported.{'\n'}
        <Text
          style={[styles.infoTextFontStyle, styles.textUnderLine]}
          onPress={() => Linking.openURL('https://www.catawbariverkeeper.org/donate/')}
        >
          Click here to join today!
        </Text>
      </Text>

      <Text style={[styles.infoTextFontStyle, { fontSize: 18 }]}>
        App Developed by Shiny Creek{'\n'}
        45 S. French Broad Ave, Suite 175{'\n'}
        Asheville, NC 28801{'\n'}
        <Text
          style={[styles.textUnderLine]}
          onPress={() => Linking.openURL('http://www.shinycreek.com/')}
        >
          shinycreek.com
        </Text>
      </Text>

      <Footer left onPressLeft={() => Actions.pop()} />
    </View>
  </BackgroundImage>
);

export default ContactInfo;
