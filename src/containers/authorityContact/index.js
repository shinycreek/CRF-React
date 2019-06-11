import React from 'react';
import { View, WebView } from 'react-native';
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
