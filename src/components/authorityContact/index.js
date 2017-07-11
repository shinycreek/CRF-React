import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { phonecall, email } from 'react-native-communications';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';

const AuthorityContact = ({ contactDetails }) => (
  <View style={{ flex: 1, marginTop: 50 }}>
    <ScrollView style={[mainStyles.container]}>
      {contactDetails.map((contactDetail, index) => (
        <View key={`autCon${index}`} style={[mainStyles.box, { margin: 10 }]}>
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
          <Text style={[styles.textStyle]}>
            { contactDetail.get('description') }
          </Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

const mapStateToProps = state => (
  {
    contactDetails: state.getIn(['authorityContact', 'contactDetails']),
  }
);

export default connect(mapStateToProps)(AuthorityContact);
