import React from 'react';
import {
  View,
  Text,
  Image,
  Picker
} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { renderInputField } from '../../components/fields/';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import { locationLogo } from '../../constants/images';

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
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderSelect({ input, data }) {
    console.log("data:")
    console.log(data)
    return (
      <View style={{ backgroundColor: '#FFF' }}>
        <Picker
          {...input}
          selectedValue={input.value}
          
          onValueChange={value => input.onChange(value)}
        >
          {data.map((name, index) => (
            <Picker.Item label={name} value={name} key={`county${index}`} />
          ))}
        </Picker>
      </View>
    );
  }

  render() {
    const {counties} = this.props;
    return (
      <View>
        <View style={[mainStyles.box, styles.bottomSpace, styles.topSpace]}>
          <Field
            name="describe_trash"
            label="Describe the trash and anything large or unique:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
          <Field
            name="describe_location"
            label="Describe the location and extent of the trash:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
            <Text style={styles.label}>County where trash was observed: </Text>
            <Field
              name="county"
              component={this.renderSelect}
              data={counties}
            />
          </View>

        <View style={[mainStyles.box, styles.bottomSpace]}>
          <Field
            name="adjacent_waterway"
            label="What is the name of the adjacent waterway? (If known)"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[styles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, { marginBottom: 50, flexDirection: 'row' }]}>
          <View style={{ flex: 0.5 }}>
            <Text style={[mainStyles.label, { marginTop: 1 }]}>Location saved as current location.
              {'\n'}
              Click here to set to a different location.
            </Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Image
              style={{ height: 37, width: 24 }}
              source={locationLogo}
              resizeMode="cover"
            />
          </View>
        </View>

      </View>
    );
  }
}

StepFirst.defaultProps = {
  counties: ['Alexander', 'Avery', 'Burke', 'Caldwell', 'Catawba', 'Chester', 'Fairfield', 'Gaston', 'Iredell', 'Kershaw', 'Lancaster', 'Lincoln', 'McDowell', 'Mecklenburg', 'Richland', 'Union', 'Watagua', 'York']
};

StepFirst.propTypes = {
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  counties: PropTypes.arrayOf(PropTypes.string)
};

export default reduxForm({
  form: 'trashLoggerTileForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StepFirst);
