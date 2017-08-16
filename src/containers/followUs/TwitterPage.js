import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchTwitterPageUrl } from '../../actions/website';
import styles from './styles';

class TwitterPage extends React.Component {

  componentDidMount() {
    this.props.actions();
  }

  render() {
    const { twitterPageUrl } = this.props;
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: twitterPageUrl }}
        />
      </View>
    );
  }

}

TwitterPage.defaultProps = {
  twitterPageUrl: '',
};

TwitterPage.propTypes = {
  actions: PropTypes.func.isRequired,
  twitterPageUrl: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    twitterPageUrl: state.getIn(['twitterPage', 'url']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchTwitterPageUrl, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterPage);
