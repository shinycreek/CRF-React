import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchFacebookPageUrl } from '../../actions/website';
import styles from './styles';

class FacebookPage extends React.Component {
  componentDidMount() {
    this.props.actions();
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
  actions: PropTypes.func.isRequired,
  facebookPageUrl: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    facebookPageUrl: state.getIn(['facebookPage', 'url']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchFacebookPageUrl, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookPage);
