import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';

const SwinGiude = () => (
  <View style={styles.container}>
    <WebView
      source={{ uri: 'https://www.theswimguide.org/affiliates/catawba-riverkeeper-foundation/' }}
      startInLoadingState
    />
  </View>
);

export default SwinGiude;
