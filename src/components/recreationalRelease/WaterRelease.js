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
  mainStyles.pLeft20,
];

const startsText = waterRelease => (
  waterRelease.generation ? waterRelease.start_at : waterRelease.date
);

const stopsText = waterRelease => (
  waterRelease.generation ? waterRelease.stop_at : 'No Generation Scheduled'
);

const unitsText = waterRelease => (
  waterRelease.units === 2 ? '- 2 Units' : ""
);

const WaterRelease = ({ waterReleases }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={startsStopsContentStyle.concat({ flex: 1 })}>Starts</Text>
      <Text style={startsStopsContentStyle.concat({ flex: 1.5 })}>Stops</Text>
    </View>
    {waterReleases.map((waterRelease, index) => (
      <View key={`waterReleaseRow${index}`} style={even(index) ? mainStyles.row2 : mainStyles.row1}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={startsStopsContentStyle}>{startsText(waterRelease)}</Text>
        </View>
        <View style={{ flex: 1.5, flexDirection: 'row' }}>
          <Text style={startsStopsContentStyle}>
            {`${stopsText(waterRelease)} ${unitsText(waterRelease)}`}
          </Text>
        </View>
      </View>
    ))}
  </View>
);

WaterRelease.propTypes = {
  waterReleases: PropTypes.instanceOf(Object).isRequired,
};

export default WaterRelease;
