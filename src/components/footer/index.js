import React from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Button from 'apsl-react-native-button';
import styles from './styles';

const Footer = props => (
  <View style={styles.footer}>
    {props.left && <View style={styles.left}>
      <Icon name="arrow-left" size={30} color="#D8D8D8" onPress={() => props.onPressLeft()} />
    </View>}

    {props.middle &&
      <View style={[styles.middle, { flex: props.right ? 1 : 2 }]}>
        <Button style={{ backgroundColor: '#D8D8D8', width: 150 }} textStyle={{ fontSize: 18, color: 'black' }} onPress={() => props.onPressMiddle()} >
          { props.middleButtonText }
        </Button>
      </View>
    }

    {props.right &&
      <View style={styles.right}>
        <Icon name="arrow-right" size={30} color="#D8D8D8" onPress={() => props.onPressRight()} />
      </View>
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
