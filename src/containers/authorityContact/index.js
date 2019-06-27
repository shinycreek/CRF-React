import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const AuthorityContact = () => (
  <View style={styles.mainView}>
    <WebView
      source={{ uri: 'https://www.catawbariverkeeper.org/whom-to-contact/' }}
      startInLoadingState
    />
  </View>
);

export default AuthorityContact;
