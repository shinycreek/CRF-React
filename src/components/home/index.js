import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Greeting from '../greeting';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import BackgroundImage from '../appBackground/';
import { trashLogo, airLogo, barsLogo, dropletLogo, forwardLogo, mailLogo, mapLogo, crfLogo } from '../../constants/images';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.toggleGreetingVisibility = this.toggleGreetingVisibility.bind(this);

    this.state = {
      firstLaunch: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (!value) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        this.setState({ firstLaunch: true });
      } else {
        this.setState({ firstLaunch: false });
      }
    });
  }

  toggleGreetingVisibility() {
    this.setState({ firstLaunch: !this.state.firstLaunch });
  }

  render() {
    return (
      <BackgroundImage>
        <Greeting
          greetingVisibility={this.state.firstLaunch}
          toggleGreetingVisibility={this.toggleGreetingVisibility}
        />

        <View style={[mainStyles.container, mainStyles.marginFromNav, styles.container]}>

          <View style={{ flex: 1, padding: 10 }}>
            <TouchableOpacity
              onPress={() => Actions.trashLogger()}
              style={[styles.box, styles.mediumpurple]}
            >
              <View style={[styles.content, { flex: 2 }]}>
                <Image
                  style={styles.icon}
                  source={trashLogo}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.textContent, { flex: 1 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>Trash Logger</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Actions.basinMap()} style={[styles.box, styles.coral]}>
              <View style={[styles.content, { flex: 2 }]}>
                <Image
                  style={[{ height: 40, width: 50 }]}
                  source={mapLogo}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.textContent, { flex: 1 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>Basin Map</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.authorityContact()}
              style={[styles.box, styles.mediumseagreen]}
            >
              <View style={[styles.content, { flex: 1.8 }]}>
                <Image
                  style={[{ height: 35, width: 45 }]}
                  source={mailLogo}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.textContent, { flex: 1.2, marginBottom: 12 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>Authority{'\n'}Contacts</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.lakeLevels()}
              style={[styles.box, styles.mediumvioletred]}
            >
              <View style={[styles.content, { flex: 2 }]}>
                <Image
                  style={[{ height: 40, width: 50 }]}
                  source={barsLogo}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.textContent, { flex: 1 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>Lake Levels</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, padding: 10 }}>
            <TouchableOpacity
              onPress={() => Actions.pollutionReport()}
              style={[styles.box, styles.dodgerblue]}
            >
              <View style={[styles.content, { flex: 2 }]}>
                <Image
                  style={[{ height: 50, width: 30 }]}
                  source={dropletLogo}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.textContent, { flex: 1.2, marginBottom: 12 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>Pollution{'\n'}Reporter</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Actions.crf()} style={[styles.box, styles.lightseagreen]}>
              <View style={[styles.content, { flex: 2 }]}>
                <Image
                  style={[{ height: 45, width: 50 }]}
                  source={crfLogo}
                />
              </View>
              <View style={[styles.textContent, { flex: 1 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>CRF Website</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.followUs()}
              style={[styles.box, styles.followUs]}
            >
              <View style={[styles.box, styles.followUs]}>
                <View style={[styles.content, { flex: 2 }]}>
                  <Image
                    style={[{ height: 40, width: 60 }]}
                    source={forwardLogo}
                    resizeMode="cover"
                  />
                </View>
                <View style={[styles.textContent, { flex: 1 }]}>
                  <Text style={[styles.textStyle, mainStyles.fontStyle]}>Follow Us!</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.waterDams()}
              style={[styles.box, styles.recreationalRelease]}
            >
              <View style={[styles.content, { flex: 1.8 }]}>
                <Image
                  style={[{ height: 40, width: 50 }]}
                  source={airLogo}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.textContent, { flex: 1.2, marginBottom: 12 }]}>
                <Text style={[styles.textStyle, mainStyles.fontStyle]}>Recreational{'\n'}Releases</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default Home;
