import React from 'react';
import {
  View,
  Text,
  Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import Button from 'apsl-react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import validator from 'validator';
import { bindActionCreators } from 'redux';
import DeviceInfo from 'react-native-device-info';
import { createUserSetting, updateUserSetting, getUserSetting } from '../../actions/userSetting';
import mainStyles from '../../assets/css/mainStyles';
import normalizePhone from '../../utils/normalizePhone';
import { renderInputField } from '../../components/fields/';
import BackgroundImage from '../../components/appBackground/';
import styles from './styles';

const validate = (values) => {
  const errors = {};
  const firstName = values.get('first_name');
  const lastName = values.get('last_name');
  const email = values.get('email');
  const phone = values.get('phone');
  const address = values.get('address');
  const city = values.get('city');
  const state = values.get('state');
  const zip = values.get('zip');

  if (firstName.length > 0 && !/^[A-Za-z\s]+$/.test(firstName)) {
    errors.first_name = 'Letters a-z only';
  }

  if (lastName.length > 0 && !/^[A-Za-z\s]+$/.test(lastName)) {
    errors.last_name = 'Letters a-z only';
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Invalid Email';
  }

  if (phone.length > 0 && phone.length !== 12) {
    errors.phone = 'Invalid Phone Number';
  }

  if (zip.length > 0 && !/^[0-9]+$/.test(zip)) {
    errors.zip = 'Numbers only';
  }

  return errors;
};

class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.getUserSetting(DeviceInfo.getUniqueID());
  }

  onSubmit(values) {
    const formValues = values.set('phone_id', this.props.userSetting.get('phoneId')).toJS();

    if (this.props.userSetting.get('record')) {
      this.props.actions.updateUserSetting(formValues).then(() => Actions.pop());
    } else {
      this.props.actions.createUserSetting(formValues).then(() => Actions.pop());
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <BackgroundImage>
        <View style={[mainStyles.container, styles.container]}>
          <KeyboardAwareScrollView>
            <Text style={[mainStyles.textFont, styles.bottomSpace10, mainStyles.clearTextBg]}>
              Catawba Riverkeeper does not share your information with anyone else. You can tell us about yourself below so that we can follow up with you about issues you report and to let you know more about what we are doing.
            </Text>
            <View style={[mainStyles.box, styles.middle]}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Field
                    name="first_name"
                    component={renderInputField}
                    label="First Name"
                    style={[mainStyles.inputField, { marginRight: 5 }]}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Field
                    name="last_name"
                    label="Last Name"
                    component={renderInputField}
                    style={[mainStyles.inputField]}
                  />
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Field
                  name="email"
                  label="Email"
                  component={renderInputField}
                  style={[mainStyles.inputField]}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Field
                  name="phone"
                  label="Phone Number:"
                  component={renderInputField}
                  normalize={normalizePhone}
                  style={[mainStyles.inputField]}
                />
              </View>

            </View>

            <View style={[mainStyles.box, styles.bottom]}>
              <View style={{ flex: 1 }}>
                <Field
                  name="address"
                  label="Address"
                  component={renderInputField}
                  style={[mainStyles.inputField]}
                />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Field
                    name="city"
                    label="City"
                    component={renderInputField}
                    style={[mainStyles.inputField, { marginRight: 5 }]}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Field
                    name="state"
                    label="State"
                    component={renderInputField}
                    options={{ maxLength: 2 }}
                    style={[mainStyles.inputField]}
                  />
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Field
                  name="zip"
                  label="Zip"
                  component={renderInputField}
                  options={{ maxLength: 20, keyboardType: 'numeric' }}
                  style={[mainStyles.inputField]}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.footer}>
            <View style={[styles.footerButton, { flex: 0.8 }]}>
              <Icon name="arrow-left" size={30} color="#D8D8D8" onPress={() => Actions.pop()} />
            </View>

            <View style={[styles.footerButton, { flex: 1 }]}>
              <Button style={{ backgroundColor: '#D8D8D8', width: 50, marginTop: 10 }} textStyle={{ fontSize: 18, color: 'black' }} onPress={handleSubmit(this.onSubmit)} >
                OK
              </Button>
            </View>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

UserSetting.propTypes = {
  actions: PropTypes.shape({
    createUserSetting: PropTypes.func.isRequired,
    updateUserSetting: PropTypes.func.isRequired,
    getUserSetting: PropTypes.func.isRequired,
  }).isRequired,
  userSetting: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const stateObj = { userSetting: state.get('userSetting') };
  const initialValues = state.getIn(['userSetting', 'record']);
  if (initialValues && (initialValues.size > 0)) {
    stateObj.initialValues = initialValues;
  }
  return stateObj;
};

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ createUserSetting, updateUserSetting, getUserSetting }, dispatch),
  }
);

const UserSettingForm = reduxForm({
  form: 'userSettingForm', // a unique identifier for this form
  validate,
})(UserSetting);

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingForm);
