import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { fetchInstagramPageUrl } from '../../actions/website';
import styles from './styles';

class InstagramPage extends React.Component {

  componentDidMount() {
    this.props.actions();
  }

  render() {
    const { instagramPageUrl } = this.props;
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: instagramPageUrl }}
        />
      </View>
    );
  }

}

InstagramPage.defaultProps = {
  instagramPageUrl: '',
};

InstagramPage.propTypes = {
  actions: PropTypes.func.isRequired,
  instagramPageUrl: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    instagramPageUrl: state.getIn(['instagramPage', 'url']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchInstagramPageUrl, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InstagramPage);
