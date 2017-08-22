import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchFollowUsPageUrl } from '../../actions/website';
import styles from './styles';

class FacebookPage extends React.Component {
  componentDidMount() {
    this.props.actions.fetchFollowUsPageUrl('facebook');
  }

  render() {
    const { facebookPageUrl, loaded } = this.props;
    return (
      <View style={styles.container}>
        { !loaded ? null :
        <WebView
          source={{ uri: facebookPageUrl }}
        />
        }
      </View>
    );
  }

}

FacebookPage.defaultProps = {
  facebookPageUrl: '',
  loaded: false,
};

FacebookPage.propTypes = {
  actions: PropTypes.shape({
    fetchFollowUsPageUrl: PropTypes.func.isRequired,
  }).isRequired,
  facebookPageUrl: PropTypes.string,
  loaded: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    facebookPageUrl: state.getIn(['followUsPage', 'url']),
    loaded: state.getIn(['followUsPage', 'loaded']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchFollowUsPageUrl }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookPage);
