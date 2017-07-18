import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export const renderRightButton = () => (
  <TouchableOpacity onPress={() => Actions.userSetting()}>
    <Text>
      <Icon name="cog" size={28} color="white" />
    </Text>
  </TouchableOpacity>
);

export const renderHomeButton = () => (
  <TouchableOpacity onPress={() => Actions.home()}>
    <Text>
      <Icon name="home" size={30} color="white" />
    </Text>
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
