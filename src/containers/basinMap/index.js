import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  View,
  WebView,
} from 'react-native';

import { fetchBasinMap } from '../../actions/website';
import styles from './styles';

class BasinMap extends React.Component {

  componentDidMount() {
    this.props.actions();
  }

  render() {
    const { basinMapUrl } = this.props;
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: basinMapUrl }}
        />
      </View>
    );
  }

}

BasinMap.propTypes = {
  actions: PropTypes.func.isRequired,
  basinMapUrl: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    basinMapUrl: state.getIn(['basinMap', 'url']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchBasinMap, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasinMap);
