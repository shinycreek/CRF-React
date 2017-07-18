import React from 'react';
import {
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SPLASH_SCREEN_CLOSE } from '../../constants/types';
import { splashPageLogo } from '../../constants/images';
import styles from './styles';


class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.closeSplashScreen = this.closeSplashScreen.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.closeSplashScreen();
    }, 3000);
  }

  closeSplashScreen() {
    this.props.dispatch({ type: SPLASH_SCREEN_CLOSE });
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

SplashScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    dispatch,
  }
);

export default connect(null, mapDispatchToProps)(SplashScreen);
