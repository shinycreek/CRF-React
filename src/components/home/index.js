import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';

const Home = () => (
  <View style={[mainStyles.container, styles.container]}>

    <View style={{ flex: 1, padding: 10 }}>

      <TouchableOpacity onPress={() => Actions.trashLogger()} style={[styles.box, styles.mediumpurple]}>
        <View>
          <Text style={styles.textStyle}>Trash Logger</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.basinMap()} style={[styles.box, styles.coral]}>
        <View>
          <Text style={styles.textStyle}>Basin Map</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.authorityContact()} style={[styles.box, styles.mediumseagreen]}>
        <View>
          <Text style={styles.textStyle}>Authority Contacts</Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.box, styles.mediumvioletred]}>
        <Text style={styles.textStyle}>Lake Levels</Text>
      </View>
    </View>

    <View style={{ flex: 1, padding: 10 }}>
      <TouchableOpacity onPress={() => Actions.pollutionReport()} style={[styles.box, styles.dodgerblue]}>
        <View>
          <Text style={styles.textStyle}>Pollution Reporter</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.crf()} style={[styles.box, styles.lightseagreen]}>
        <View><Text style={styles.textStyle}>CRF Website</Text></View>
      </TouchableOpacity>

      <View style={[styles.box, styles.coral]}>
        <Text style={styles.textStyle}>Follow Us!</Text>
      </View>

      <View style={[styles.box, styles.mediumpurple]}>
        <Text style={styles.textStyle}>Recreational Releases</Text>
      </View>

    </View>
  </View>
);

export default Home;
