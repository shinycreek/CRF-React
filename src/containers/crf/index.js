import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  View,
  WebView,
} from 'react-native';

import { fetchCRF } from '../../actions/website';
import styles from './styles';

class CRF extends React.Component {

  componentDidMount() {
    this.props.actions();
  }

  render() {
    const { crfUrl, loaded } = this.props;
    return (
      <View style={styles.container}>
        { !loaded ? null :
        <WebView
          source={{ uri: crfUrl }}
        />
        }
      </View>
    );
  }

}

CRF.defaultProps = {
  crfUrl: '',
  loaded: false,
};

CRF.propTypes = {
  actions: PropTypes.func.isRequired,
  crfUrl: PropTypes.PropTypes.string,
  loaded: PropTypes.bool,
};


function mapStateToProps(state) {
  return {
    crfUrl: state.getIn(['crf', 'url']),
    loaded: state.getIn(['crf', 'loaded']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchCRF, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CRF);
