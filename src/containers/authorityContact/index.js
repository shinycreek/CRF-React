import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { phonecall, email } from 'react-native-communications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { getAuthorityContacts } from '../../actions/authorityContact';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import BackgroundImage from '../../components/appBackground/';

class AuthorityContact extends React.Component {

  componentDidMount() {
    if (this.props.contactDetails.size === 0) {
      this.props.actions.getAuthorityContacts();
    }
  }

  render() {
    const { contactDetails } = this.props;
    return (
      <BackgroundImage>
        <View style={{ flex: 1, marginTop: 50 }}>
          <ScrollView style={[mainStyles.container]}>
            {contactDetails.map((contactDetail, index) => (
              <View key={`autCon${index}`} style={[mainStyles.box, { margin: 10 }]}>
                <Text style={[styles.textStyle]}>
                  { contactDetail.get('description') }
                </Text>
                <Text style={[styles.textStyle]}>
                  <Icon name="user" color="#272b71" style={[styles.textStyle]} />
                  &nbsp; { contactDetail.get('display_name') }
                </Text>
                <TouchableOpacity
                  onPress={() => email([contactDetail.get('email')], null, null, null, null)}
                >
                  <Text style={[styles.textStyle]}>
                    <Icon name="envelope" color="#272b71" style={[styles.textStyle]} /> { contactDetail.get('email') }
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => phonecall(contactDetail.get('phone'), true)}
                >
                  <Text style={[styles.textStyle]}>
                    <Icon name="phone" color="#272b71" style={[styles.textStyle]} /> { contactDetail.get('phone') }
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

AuthorityContact.propTypes = {
  actions: PropTypes.shape({
    getAuthorityContacts: PropTypes.func.isRequired,
  }).isRequired,
  contactDetails: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => (
  {
    contactDetails: state.getIn(['authorityContact', 'contactDetails']),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ getAuthorityContacts }, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthorityContact);
