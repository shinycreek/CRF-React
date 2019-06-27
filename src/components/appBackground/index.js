import React, { Component } from 'react';
import {
  ImageBackground,
} from 'react-native';

import { homebgLogo } from '../../constants/images';
import styles from './styles';

class BackgroundImage extends Component {
  render() {
    // const { source, children, style, ...props } = this.props;
    return (
      <ImageBackground
        source={homebgLogo}
        style={styles.backgroundImage}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

export default BackgroundImage;
