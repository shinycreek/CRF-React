import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchFollowUsPageUrl } from '../../actions/website';
import styles from './styles';

class InstagramPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchFollowUsPageUrl('instagram');
  }

  render() {
    const { instagramPageUrl, loaded } = this.props;
    return (
      <View style={styles.container}>
        { !loaded ? null :
        <WebView
          source={{ uri: instagramPageUrl }}
        />
        }
      </View>
    );
  }

}

InstagramPage.defaultProps = {
  instagramPageUrl: '',
  loaded: false,
};

InstagramPage.propTypes = {
  actions: PropTypes.shape({
    fetchFollowUsPageUrl: PropTypes.func.isRequired,
  }).isRequired,
  instagramPageUrl: PropTypes.string,
  loaded: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    instagramPageUrl: state.getIn(['followUsPage', 'url']),
    loaded: state.getIn(['followUsPage', 'loaded']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchFollowUsPageUrl }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InstagramPage);
