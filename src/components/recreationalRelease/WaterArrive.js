import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { even } from '../../utils/extraLib';

import mainStyles from '../../assets/css/mainStyles';

const WaterArrive = ({ waterArrives }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text
        style={[mainStyles.h4, mainStyles.bold, mainStyles.textColorBlue, { flex: 1 }]}
      >
         Flow Arrives
      </Text>
      <Text
        style={[mainStyles.h4, mainStyles.bold, mainStyles.textColorBlue, { flex: 1 }]}
      >
         Flow Recedes
      </Text>
    </View>
    {waterArrives.map((waterArrive, index) => (
      <View key={`waterArriveRow${index}`} style={even(index) ? mainStyles.row1 : mainStyles.row2}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text>{waterArrive.arrival_time}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text>{waterArrive.recedes_time}</Text>
        </View>
      </View>
    ))}
  </View>
);

WaterArrive.propTypes = {
  waterArrives: PropTypes.instanceOf(Object).isRequired,
};

export default WaterArrive;
