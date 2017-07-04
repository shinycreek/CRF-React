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
  const describeTrash = values.get('describe_trash');
  const describeLocation = values.get('describe_location');

  if (!describeTrash) {
    errors.describe_trash = 'Required';
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
            name="describe_trash"
            label="Describe the trash and anything large or unique:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 3 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
          <Field
            name="describe_location"
            label="Describe the location and extent of the trash:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 3 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
          <Field
            name="adjacent_waterway"
            label="What is the name of the adjacent waterway? (If known)"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 3 }}
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
  form: 'trashLoggerForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StepFirst);
