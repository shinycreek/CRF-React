import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Button from 'apsl-react-native-button';
import { arrowLeftLogo, arrowRightLogo } from '../../constants/images';
import styles from './styles';

const Footer = props => (
  <View style={styles.footer}>
    {props.left && <TouchableOpacity onPress={() => props.onPressLeft()} style={styles.left}>
      <Image
        source={arrowLeftLogo}
        style={styles.arrowLeft}
      />
      </TouchableOpacity>
    }

    {props.middle &&
      <View style={[styles.middle, { flex: props.right ? 1 : 2 }]}>
        <Button style={{ backgroundColor: '#D8D8D8', width: 150 }} textStyle={{ fontSize: 18, color: 'black' }} onPress={() => props.onPressMiddle()} >
          { props.middleButtonText }
        </Button>
      </View>
    }

    {props.right && <TouchableOpacity onPress={() => props.onPressRight()} style={styles.right}>
      <Image
        source={arrowRightLogo}
        style={styles.arrowRight}
      />
      </TouchableOpacity>
    }

  </View>

);

Footer.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  middle: PropTypes.bool,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  onPressMiddle: PropTypes.func,
  middleButtonText: PropTypes.string,
};

Footer.defaultProps = {
  left: false,
  right: false,
  middle: false,
  onPressLeft: _.noop,
  onPressRight: _.noop,
  onPressMiddle: _.noop,
  middleButtonText: _.noop,
};

export default Footer;
