import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { renderInputField } from '../../components/fields/';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';

const validate = (values) => {
  const errors = {};
  const describePollution = values.get('describe_pollution');
  const describeLocation = values.get('describe_location');

  if (!describePollution) {
    errors.describe_pollution = 'Required';
  }

  if (!describeLocation) {
    errors.describe_location = 'Required';
  }

  return errors;
};

class StepFirst extends React.Component {

  componentDidMount() {
    this.props.handleChildFormSubmit(this.props.handleSubmit);
  }

  render() {
    return (
      <View>
        <View style={[mainStyles.box, styles.bottomSpace, styles.topSpace]}>
          <Field
            name="describe_pollution"
            label="Describe the pollution and anything large or unique:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
          <Field
            name="describe_location"
            label="Describe the location and extent of the pollution:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
          <Field
            name="adjacent_area"
            label="What is the name of the adjacent area? (If known)"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, { marginBottom: 50 }]}>
          <Text>Location saved as current location.</Text>
          <Text>Click here to set to a different location.</Text>
        </View>

      </View>
    );
  }
}

StepFirst.propTypes = {
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'pollutionReportForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StepFirst);
