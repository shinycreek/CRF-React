import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchFollowUsPageUrl } from '../../actions/website';
import styles from './styles';

class FacebookPage extends React.Component {
  componentWillMount() {
    this.props.actions.fetchFollowUsPageUrl('facebook');
  }

  render() {
    const { facebookPageUrl } = this.props;
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: facebookPageUrl }}
        />
      </View>
    );
  }

}

FacebookPage.defaultProps = {
  facebookPageUrl: '',
};

FacebookPage.propTypes = {
  actions: PropTypes.shape({
    fetchFollowUsPageUrl: PropTypes.func.isRequired,
  }).isRequired,
  facebookPageUrl: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    facebookPageUrl: state.getIn(['followUsPage', 'url']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchFollowUsPageUrl }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookPage);
