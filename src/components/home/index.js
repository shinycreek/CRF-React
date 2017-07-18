import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import BackgroundImage from '../appBackground/';
import { trashLogo, airLogo, barsLogo, dropletLogo, forwardLogo, mailLogo, mapLogo, crfLogo } from '../../constants/images';
import SplashScreen from '../../containers/home/';

const Home = ({ alreadyShowedSplashScreen }) => {
  if (!alreadyShowedSplashScreen) {
    return <SplashScreen />;
  }
  return (
    <BackgroundImage>
      <View style={[mainStyles.container, styles.container]}>

        <View style={{ flex: 1, padding: 10 }}>
          <TouchableOpacity onPress={() => Actions.trashLogger()} style={[styles.box, styles.mediumpurple]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={styles.icon}
                source={trashLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1 }]}>
              <Text style={styles.textStyle}>Trash Logger</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.basinMap()} style={[styles.box, styles.coral]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={[{ height: 60, width: 75 }]}
                source={mapLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1 }]}>
              <Text style={styles.textStyle}>Basin Map</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.authorityContact()} style={[styles.box, styles.mediumseagreen]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={[{ height: 35, width: 50 }]}
                source={mailLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1, marginBottom: 12 }]}>
              <Text style={styles.textStyle}>Authority Contacts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.lakeLevels()} style={[styles.box, styles.mediumvioletred]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={[{ height: 50, width: 50 }]}
                source={barsLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1 }]}>
              <Text style={styles.textStyle}>Lake Levels</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, padding: 10 }}>
          <TouchableOpacity onPress={() => Actions.pollutionReport()} style={[styles.box, styles.dodgerblue]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={[{ height: 50, width: 30 }]}
                source={dropletLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1, marginBottom: 14 }]}>
              <Text style={styles.textStyle}>Pollution</Text>
              <Text style={styles.textStyle}>Reporter</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.crf()} style={[styles.box, styles.lightseagreen]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={styles.icon}
                source={crfLogo}
              />
            </View>
            <View style={[styles.textContent, { flex: 1 }]}>
              <Text style={styles.textStyle}>CRF Website</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.box, styles.followUs]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={[{ height: 40, width: 60 }]}
                source={forwardLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1 }]}>
              <Text style={styles.textStyle}>Follow Us!</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => Actions.waterDams()} style={[styles.box, styles.recreationalRelease]}>
            <View style={[styles.content, { flex: 2 }]}>
              <Image
                style={[{ height: 40, width: 60 }]}
                source={airLogo}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.textContent, { flex: 1, marginBottom: 12 }]}>
              <Text style={[styles.textStyle]}>Recreational</Text>
              <Text style={[styles.textStyle]}>Releases</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
};

Home.propTypes = {
  alreadyShowedSplashScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    alreadyShowedSplashScreen: state.getIn(['splashScreen', 'showedFirstTime']),
  }
);

export default connect(mapStateToProps)(Home);
