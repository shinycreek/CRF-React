import React from 'react';
import { View, WebView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LakeNews = props => (
  <View style={styles.container}>
    <WebView
      source={{ uri: props.lake_url }}
      startInLoadingState
    />
  </View>
);

LakeNews.propTypes = {
  lake_url: PropTypes.string.isRequired,
};

export default LakeNews;
