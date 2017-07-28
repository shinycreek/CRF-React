import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { even } from '../../utils/extraLib';

import mainStyles from '../../assets/css/mainStyles';

const startsStopsContentStyle = [
  mainStyles.fontAkzB,
  mainStyles.fWeight500,
  mainStyles.textColorLightBlue,
];

const startsStopsHeadingStyle = startsStopsContentStyle.concat(
  mainStyles.pLeft10,
  { flex: 1 },
);

const WaterRelease = ({ waterReleases }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={startsStopsHeadingStyle}>Starts</Text>
      <Text style={startsStopsHeadingStyle}>Stops</Text>
    </View>
    {waterReleases.map((waterRelease, index) => (
      <View key={`waterReleaseRow${index}`} style={even(index) ? mainStyles.row2 : mainStyles.row1}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={startsStopsContentStyle}>{waterRelease.start_at}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={startsStopsContentStyle}>{waterRelease.stop_at}</Text>
        </View>
      </View>
    ))}
  </View>
);

WaterRelease.propTypes = {
  waterReleases: PropTypes.instanceOf(Object).isRequired,
};

export default WaterRelease;
