import React from 'react';
import {
  View,
  WebView,
} from 'react-native';

import styles from './styles';

const CRF = () => (
  <View style={styles.container}>
    <WebView
      source={{ uri: 'http://www.catawbariverkeeper.org/' }}
      style={{ marginTop: 50 }}
    />
  </View>
);

export default CRF;
