import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { even } from '../../utils/extraLib';

import mainStyles from '../../assets/css/mainStyles';

const WaterRelease = ({ waterReleases }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text
        style={[mainStyles.h4, mainStyles.bold, mainStyles.textColorBlue, { flex: 1 }]}
      >
         Starts
      </Text>
      <Text
        style={[mainStyles.h4, mainStyles.bold, mainStyles.textColorBlue, { flex: 1 }]}
      >
         Stops
      </Text>
    </View>
    {waterReleases.map((waterRelease, index) => (
      <View key={`waterReleaseRow${index}`} style={even(index) ? mainStyles.row1 : mainStyles.row2}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text>{waterRelease.start_at}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text>{waterRelease.stop_at}</Text>
        </View>
      </View>
    ))}
  </View>
);

WaterRelease.propTypes = {
  waterReleases: PropTypes.instanceOf(Object).isRequired,
};

export default WaterRelease;
