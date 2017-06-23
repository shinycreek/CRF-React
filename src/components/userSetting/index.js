import React from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
} from 'react-native';

import Button from 'apsl-react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import validator from 'validator';

import mainStyles from '../../assets/css/mainStyles';
import styles from './styles';

const validate = (values) => {
  const errors = {};
  const firstName = values.get('firstName');
  const lastName = values.get('lastName');
  const email = values.get('email');
  const phone = values.get('phone');
  const address = values.get('address');
  const city = values.get('city');
  const state = values.get('state');
  const zip = values.get('zip');

  if (!firstName) {
    errors.firstName = 'Required';
  } else if (!/^[A-Za-z\s]+$/.test(firstName)) {
    errors.firstName = 'Alphabets only';
  }

  if (!lastName) {
    errors.lastName = 'Required';
  } else if (!/^[A-Za-z\s]+$/.test(lastName)) {
    errors.lastName = 'Alphabets only';
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Invalid Email';
  }

  if (!phone) {
    errors.phone = 'Required';
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
  }

  return errors;
};

class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.renderInputField = this.renderInputField.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderInputField({ input: { onChange, ...restInput }, style, meta: { touched, error }, options }) {
    const arrStyles = [styles.inputField, style];
    if (touched && error) {
      arrStyles.push(mainStyles.inputError);
    }
    return (
      <View>
        <TextInput
          onChangeText={onChange}
          {...restInput}
          style={arrStyles}
          underlineColorAndroid="transparent"
          {...options}
        />
        {touched && error &&
          <Text style={mainStyles.errorText}>{error}</Text>
        }
      </View>
    );
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

  onSubmit(values, dispatch) {
    debugger

  }

  render() {
    const { handleSubmit, submitting, countries } = this.props;
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
                  name="firstName"
                  component={this.renderInputField}
                  style={{ marginRight: 5 }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Last Name </Text>
                <Field
                  name="lastName"
                  component={this.renderInputField}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Email </Text>
              <Field
                name="email"
                component={this.renderInputField}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Phone Number: </Text>
              <Field
                name="phone"
                component={this.renderInputField}
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
                component={this.renderInputField}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>City </Text>
                <Field
                  name="city"
                  component={this.renderInputField}
                  style={{ marginRight: 5 }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>State </Text>
                <Field
                  name="state"
                  component={this.renderInputField}
                  options={{ maxLength: 2 }}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Zip </Text>
              <Field
                name="zip"
                component={this.renderInputField}
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

const UserSettingForm = reduxForm({
  form: 'userSettingForm', // a unique identifier for this form
  validate,
})(UserSetting);

export default connect(null, null)(UserSettingForm);
