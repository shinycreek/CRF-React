import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

import { homebgLogo } from '../../constants/images';
import styles from './styles';

class BackgroundImage extends Component {
  render() {
    const { source, children, style, ...props } = this.props;
    return (
      <Image
        source={homebgLogo}
        style={styles.backgroundImage}
      >
        {this.props.children}
      </Image>
    );
  }
}

export default BackgroundImage;
