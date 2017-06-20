import React from 'react';
import {
  View,
  WebView,
} from 'react-native';

import styles from './styles';

const BasinMap = () => (
  <View style={styles.container}>
    <WebView
      source={{ uri: 'http://catawba.maps.arcgis.com/apps/webappviewer/index.html?id=86a805d54d5546d2b99a73d60b16a19d' }}
    />
  </View>
);

export default BasinMap;
