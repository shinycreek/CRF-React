import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { homeLogo, settingLogo } from '../../constants/images';

const styles = StyleSheet.create({
  homeLogo: {
    width: 30,
    height: 30,
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
      <Icon name="times" size={30} color="white" />
    </Text>
  </TouchableOpacity>
);

export const RenderCameraButton = ({ onClick, ...other }) => (
  <TouchableOpacity onPress={() => onClick()}>
    <Icon name="camera" {...other} />
  </TouchableOpacity>
);

export const RenderGallaryButton = ({ onClick, ...other }) => (
  <TouchableOpacity onPress={() => onClick()}>
    <Icon name="picture-o" {...other} />
  </TouchableOpacity>
);
