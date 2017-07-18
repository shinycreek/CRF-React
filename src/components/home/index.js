import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import BackgroundImage from '../appBackground/';

const Home = () => (
  <BackgroundImage>
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

        <TouchableOpacity onPress={() => Actions.lakeLevels()} style={[styles.box, styles.mediumvioletred]}>
          <View>
            <Text style={styles.textStyle}>Lake Levels</Text>
          </View>
        </TouchableOpacity>
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

        <View style={[styles.box, styles.followUs]}>
          <Text style={styles.textStyle}>Follow Us!</Text>
        </View>

        <TouchableOpacity onPress={() => Actions.waterDams()} style={[styles.box, styles.recreationalRelease]}>
          <View><Text style={styles.textStyle}>Recreational Releases</Text></View>
        </TouchableOpacity>

      </View>
    </View>
  </BackgroundImage>
);

export default Home;
