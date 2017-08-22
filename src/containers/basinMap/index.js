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
    const { basinMapUrl, loaded } = this.props;
    return (
      <View style={styles.container}>
        { !loaded ? null :
        <WebView
          source={{ uri: basinMapUrl }}
        />
        }
      </View>
    );
  }

}

BasinMap.defaultProps = {
  basinMapUrl: '',
  loaded: false,
};

BasinMap.propTypes = {
  actions: PropTypes.func.isRequired,
  basinMapUrl: PropTypes.string,
  loaded: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    basinMapUrl: state.getIn(['basinMap', 'url']),
    loaded: state.getIn(['basinMap', 'loaded']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchBasinMap, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasinMap);
