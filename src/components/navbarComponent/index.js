import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {
  homeLogo,
  settingLogo,
  cameraLogo,
  libraryLogo,
  infoLogo,
  arrowLeftLogo,
} from '../../constants/images';

const styles = StyleSheet.create({
  homeLogo: {
    width: (Platform.OS === 'ios') ? 20 : 30,
    height: (Platform.OS === 'ios') ? 20 : 30,
  },

  camLib: {
    width: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
});

export const renderRightButton = () => (
  <TouchableOpacity onPress={() => Actions.userSetting()}>
    <Image
      style={styles.homeLogo}
      source={settingLogo}
    />
  </TouchableOpacity>
);

export const renderHomeButton = () => (
  <TouchableOpacity onPress={() => Actions.home()}>
    <Image
      style={styles.homeLogo}
      source={homeLogo}
    />
  </TouchableOpacity>
);

export const renderCloseButton = () => (
  <TouchableOpacity onPress={() => Actions.home()}>
    <Text>
      <Icon name="times" size={(Platform.OS === 'ios') ? 25 : 30} color="white" />
    </Text>
  </TouchableOpacity>
);

export const RenderCameraButton = ({ onClick }) => (
  <TouchableOpacity onPress={() => onClick()}>
    <Image
      style={styles.camLib}
      source={cameraLogo}
    />
  </TouchableOpacity>
);

export const RenderGallaryButton = ({ onClick }) => (
  <TouchableOpacity onPress={() => onClick()}>
    <Image
      style={styles.camLib}
      source={libraryLogo}
    />
  </TouchableOpacity>
);

export const renderInfoButton = () => (
  <TouchableOpacity onPress={() => Actions.contactInfo()}>
    <Image
      style={styles.homeLogo}
      source={infoLogo}
    />
  </TouchableOpacity>
);

export const renderBackButton = () => (
  <TouchableOpacity onPress={() => Actions.pop()}>
    <Image
      style={styles.homeLogo}
      source={arrowLeftLogo}
    />
  </TouchableOpacity>
);
