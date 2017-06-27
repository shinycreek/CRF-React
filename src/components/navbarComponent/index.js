import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export const renderRightButton = () => (
  <View><Text><Icon name="cog" size={30} color="#272b71" marginBottom={100} onPress={() => Actions.userSetting()} /></Text></View>
);

export const renderHomeButton = () => (
  <View><Text><Icon name="home" size={30} color="#272b71" marginBottom={100} onPress={() => Actions.home()} /></Text></View>
);
