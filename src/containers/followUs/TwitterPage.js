import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchFollowUsPageUrl } from '../../actions/website';
import styles from './styles';

class TwitterPage extends React.Component {

  componentWillMount() {
    this.props.actions.fetchFollowUsPageUrl('twitter');
  }

  render() {
    const { twitterPageUrl, loaded } = this.props;
    return (
      <View style={styles.container}>
        { !loaded ? null :
        <WebView
          source={{ uri: twitterPageUrl }}
        />
        }
      </View>
    );
  }

}

TwitterPage.defaultProps = {
  twitterPageUrl: '',
  loaded: false,
};

TwitterPage.propTypes = {
  actions: PropTypes.shape({
    fetchFollowUsPageUrl: PropTypes.func.isRequired,
  }).isRequired,
  twitterPageUrl: PropTypes.string,
  loaded: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    twitterPageUrl: state.getIn(['followUsPage', 'url']),
    loaded: state.getIn(['followUsPage', 'loaded']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchFollowUsPageUrl }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterPage);
