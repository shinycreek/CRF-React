import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import validator from 'validator';
import { renderInputField } from '../../components/fields/';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import normalizePhone from '../../utils/normalizePhone';

const validate = (values) => {
  const errors = {};
  const email = values.get('email');
  const phone = values.get('phone');

  if (email && !validator.isEmail(email)) {
    errors.email = 'Invalid Email';
  }

  if (phone && phone.length !== 12) {
    errors.phone = 'Invalid Phone Number';
  }

  return errors;
};

class StepThird extends React.Component {

  componentDidMount() {
    this.props.handleChildFormSubmit(this.props.handleSubmit);
  }

  render() {
    const { userSettingRecord } = this.props;
    const phone = userSettingRecord ? userSettingRecord.get('phone') : undefined;
    const email = userSettingRecord ? userSettingRecord.get('email') : undefined;
    return (
      <View>
        <Text style={[mainStyles.whiteBgText, mainStyles.clearTextBg, { marginBottom: 10, marginTop: 20 }]}>
          You can provide your email address and phone number so that we can contact you about this issue.
        </Text>

        <View style={[mainStyles.box, mainStyles.bottomSpace , mainStyles.topSpace ]}>
          <Field
            name="email"
            label="Email Address (optional)"
            options={{ value: email }}
            component={renderInputField}
            style={[mainStyles.inputField]}
          />
        </View>

        <View style={[mainStyles.box, { marginBottom: 50 }]}>
          <Field
            name="phone"
            label="Phone Number (optional)"
            component={renderInputField}
            options={{ value: phone }}
            style={[mainStyles.inputField]}
            normalize={normalizePhone}
          />
        </View>
      </View>
    );
  }
}

StepThird.propTypes = {
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  userSettingRecord: PropTypes.instanceOf(Object),
};

StepThird.defaultProps = {
  userSettingRecord: undefined,
};

const mapStateToProps = state => ({
  userSettingRecord: state.getIn(['userSetting', 'record']),
});

const StepThirdForm = reduxForm({
  form: 'pollutionReportForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StepThird);

export default connect(mapStateToProps)(StepThirdForm);
