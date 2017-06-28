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
import { createUserSetting, updateUserSetting } from '../../actions/userSetting';
import mainStyles from '../../assets/css/mainStyles';
import normalizePhone from '../../utils/normalizePhone';
import { renderInputField } from '../../components/fields/';
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

  if (!firstName) {
    errors.first_name = 'Required';
  } else if (!/^[A-Za-z\s]+$/.test(firstName)) {
    errors.first_name = 'Alphabets only';
  }

  if (!lastName) {
    errors.last_name = 'Required';
  } else if (!/^[A-Za-z\s]+$/.test(lastName)) {
    errors.last_name = 'Alphabets only';
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Invalid Email';
  }

  if (!phone) {
    errors.phone = 'Required';
  } else if (phone.length !== 12) {
    errors.phone = 'Invalid Phone Number';
  }

  if (!address) {
    errors.address = 'Required';
  }

  if (!city) {
    errors.city = 'Required';
  }

  if (!state) {
    errors.state = 'Required';
  }

  if (!zip) {
    errors.zip = 'Required';
  } else if (!/^[0-9]+$/.test(zip)) {
    errors.zip = 'Numbers only';
  }

  return errors;
};

class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.renderSelect = this.renderSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderSelect({ input, data }) {
    return (
      <Picker
        {...input}
        selectedValue={input.value}
        style={styles.inputField}
        onValueChange={value => input.onChange(value)}
      >
        {data.map((name, index) => (
          <Picker.Item label={name} value={name} key={`country${index}`} />
        ))}
      </Picker>
    );
  }

  onSubmit(values) {
    const formValues = values.set('phone_id', this.props.userSetting.get('phoneId')).toJS();

    if (this.props.userSetting.get('record')) {
      this.props.actions.updateUserSetting(formValues);
    } else {
      this.props.actions.createUserSetting(formValues);
    }
  }

  render() {
    const { handleSubmit, countries } = this.props;
    return (
      <View style={[mainStyles.container, styles.container]}>
        <KeyboardAwareScrollView>
          <Text style={styles.top}>
            Catawba Riverkeeper does not share your information with anyone else. You can tell us about yourself below so that we can follow up with you about issues you report and to let you know more about what we are doing.
          </Text>
          <View style={[styles.box, styles.middle]}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>First Name </Text>
                <Field
                  name="first_name"
                  component={renderInputField}
                  style={[styles.inputField, { marginRight: 5 }]}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Last Name </Text>
                <Field
                  name="last_name"
                  component={renderInputField}
                  style={[styles.inputField]}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Email </Text>
              <Field
                name="email"
                component={renderInputField}
                style={[styles.inputField]}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Phone Number: </Text>
              <Field
                name="phone"
                component={renderInputField}
                normalize={normalizePhone}
                style={[styles.inputField]}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Country </Text>
              <Field
                name="country"
                component={this.renderSelect}
                data={countries}
              />
            </View>
          </View>

          <View style={[styles.box, styles.bottom]}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Address </Text>
              <Field
                name="address"
                component={renderInputField}
                style={[styles.inputField]}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>City </Text>
                <Field
                  name="city"
                  component={renderInputField}
                  style={[styles.inputField, { marginRight: 5 }]}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>State </Text>
                <Field
                  name="state"
                  component={renderInputField}
                  options={{ maxLength: 2 }}
                  style={[styles.inputField]}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Zip </Text>
              <Field
                name="zip"
                component={renderInputField}
                options={{ maxLength: 20, keyboardType: 'numeric' }}
                style={[styles.inputField]}
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
    );
  }
}

UserSetting.defaultProps = {
  countries: ['Mecklenburg', 'Gaston', 'Cabarrus', 'Lincoln'],
};

UserSetting.propTypes = {
  actions: PropTypes.shape({
    createUserSetting: PropTypes.func.isRequired,
    updateUserSetting: PropTypes.func.isRequired,
  }).isRequired,
  userSetting: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string),
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
    actions: bindActionCreators({ createUserSetting, updateUserSetting }, dispatch),
  }
);

const UserSettingForm = reduxForm({
  form: 'userSettingForm', // a unique identifier for this form
  validate,
})(UserSetting);

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingForm);
