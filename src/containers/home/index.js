import React from 'react';
import {
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { splashPageLogo } from '../../constants/images';
import styles from './styles';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.home({ type: 'reset' });
    }, 3000);
  }

  render() {
    return (
      <Image
        source={splashPageLogo}
        style={styles.spashImage}
      />
    );
  }
}

export default SplashScreen;
