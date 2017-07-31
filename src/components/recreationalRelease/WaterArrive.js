import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { even } from '../../utils/extraLib';

import mainStyles from '../../assets/css/mainStyles';

const flowArrivesRecedesContentStyle = [
  mainStyles.fontAkzB,
  mainStyles.fWeight500,
  mainStyles.textColorLightBlue,
  mainStyles.pLeft20,
];

const flowArrivesRecedesHeadingStyle = flowArrivesRecedesContentStyle.concat(
  { flex: 1 },
);

const WaterArrive = ({ waterArrives }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={flowArrivesRecedesHeadingStyle}>Flow Arrives</Text>
      <Text style={flowArrivesRecedesHeadingStyle}>Flow Recedes</Text>
    </View>
    {waterArrives.map((waterArrive, index) => (
      <View key={`waterArriveRow${index}`} style={even(index) ? mainStyles.row2 : mainStyles.row1}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={flowArrivesRecedesContentStyle}>{waterArrive.arrival_time}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={flowArrivesRecedesContentStyle}>{waterArrive.recedes_time}</Text>
        </View>
      </View>
    ))}
  </View>
);

WaterArrive.propTypes = {
  waterArrives: PropTypes.instanceOf(Object).isRequired,
};

export default WaterArrive;
