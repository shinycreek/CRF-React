import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import BackgroundImage from '../../components/appBackground/';
import { facebookLogo, instagramLogo, twitterLogo } from '../../constants/images';

class FollowUs extends React.Component {
  componentDidMount() {
    // if (this.props.contactDetails.size === 0) {
    //   this.props.actions.getAuthorityContacts();
    // }
  }

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>

          <TouchableOpacity
            onPress={() => Actions.facebookPage()}
            style={styles.socialMediaTile}
          >
            <View style={styles.socialMediaBox}>
              <Image
                style={styles.socialMediaLogoSize}
                source={facebookLogo}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Actions.instagramPage()}
            style={styles.socialMediaTile}
          >
            <View style={styles.socialMediaBox}>
              <Image
                style={styles.socialMediaLogoSize}
                source={instagramLogo}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Actions.twitterPage()}
            style={styles.socialMediaTile}
          >
            <View style={styles.socialMediaBox}>
              <Image
                style={styles.socialMediaLogoSize}
                source={twitterLogo}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>

        </View>
      </BackgroundImage>
    );
  }
}

export default FollowUs;
