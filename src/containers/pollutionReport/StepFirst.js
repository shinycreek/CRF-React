import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { renderInputField } from '../../components/fields/';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import { calendarLogo, clockLogo, locationLogo } from '../../constants/images';

const selector = formValueSelector('trashLoggerTileForm');

const validate = (values) => {
  const errors = {};
  const describePollution = values.get('describe_pollution');
  const pollutionDuration = values.get('pollution_duration');

  if (!describePollution) {
    errors.describe_pollution = 'Required';
  }

  if (!pollutionDuration) {
    errors.pollution_duration = 'Required';
  }

  return errors;
};

class StepFirst extends React.Component {

  constructor(props) {
    super(props);
    this.handleDateTime = this.handleDateTime.bind(this);
    this.renderDatePickerField = this.renderDatePickerField.bind(this);
    this.renderTimePickerField = this.renderTimePickerField.bind(this);
    this.state = {
      dateTime: moment().format(),
    };
  }

  componentDidMount() {
    this.props.handleChildFormSubmit(this.props.handleSubmit);
  }

  handleDateTime(dateTime, field) {
    const momentObj = moment(this.state.dateTime);
    if (dateTime.includes(':')) {
      const dt = dateTime.split(':');
      const tm = dt[1];
      momentObj.set({
        hour: dt[0],
        minute: tm,
      });
      console.log("=momentObj.toString()", momentObj.toString())
      // Alert.alert()
    } else {
      const newDateObj = moment(dateTime);
      momentObj.set({
        year: newDateObj.get('year'),
        month: newDateObj.get('month'),
        date: newDateObj.get('date'),
      });
    }
    console.log("=momentObj.toString(11)", momentObj.toString())
    this.setState({ dateTime: momentObj.format() }, () => {
      field.input.onChange(
        this.state.dateTime,
      );
    });
  }

  renderDatePickerField(field) {
    return (
      <DatePicker
        date={field.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2018-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={calendarLogo}
        hideText
        ref={(picker) => { this.datePicker = picker; }}
        onDateChange={(d) => { this.handleDateTime(d, field); }}
        customStyles={{
          dateIcon: {
            height: 20,
            width: 20,
          },
        }}
      />
    );
  }

  renderTimePickerField(field) {
    return (
      <DatePicker
        date={field.time}
        mode="time"
        placeholder="time"
        format="HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={clockLogo}
        hideText
        is24Hour={false}
        minuteInterval={1}
        ref={(picker) => { this.timePicker = picker; }}
        onDateChange={(t) => { this.handleDateTime(t, field); }}
        customStyles={{
          dateIcon: {
            height: 20,
            width: 20,
          },
        }}
      />
    );
  }

  render() {
    const displayDate = moment(this.state.dateTime).format('MMM DD');
    const date = moment(this.state.dateTime).format('YYYY-MM-DD');
    const time = moment(this.state.dateTime).format('hh:mm A');
    return (
      <View>
        <Text style={[mainStyles.textFont, styles.bottomSpace10]}>
          Report sediment, chemical and any other pollution in this form
          so we can help make sure authorities are notified and the pollution addressed.
        </Text>
        <Text style={[mainStyles.textFont, styles.bottomSpace10]}>
          Please try to document the pollution at the incident as well as
          upstream and downstream of any water impacts.
        </Text>
        <Text style={[mainStyles.textFont]}>
          To report trash for a cleanup, please use the Trash Logger tool instead!
        </Text>
        <View style={[mainStyles.box, styles.bottomSpace, styles.topSpace]}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[mainStyles.label]}>Date and Time Pollution Observed:</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.1 }} />
            <TouchableOpacity
              onPress={() => this.datePicker.onPressDate()}
              style={[styles.dateTime, mainStyles.fieldBorder]}
            >
              <View style={[styles.displayDateTime]}>
                <Text style={[mainStyles.fontAkzB, mainStyles.f14]}>{displayDate}</Text>
              </View>
              <View style={{ position: 'absolute', left: 40 }}>
                <Field
                  name="pollution_observed_at"
                  component={this.renderDatePickerField}
                  date={date}
                  onDateChange={this.handleDateTime}
                />
              </View>

            </TouchableOpacity>
            <View style={{ flex: 0.3 }} />
            <TouchableOpacity
              onPress={() => this.timePicker.onPressDate()}
              style={[styles.dateTime, mainStyles.fieldBorder]}
            >
              <View style={[styles.displayDateTime]}>
                <Text style={[mainStyles.fontAkzB, mainStyles.f14]}>{time}</Text>
              </View>
              <View style={{ position: 'absolute', left: 40 }}>
                <Field
                  name="pollution_observed_at"
                  component={this.renderTimePickerField}
                  date={time}
                  onDateChange={this.handleDateTime}
                />
              </View>

            </TouchableOpacity>
            <View style={{ flex: 0.1 }} />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="pollution_duration"
              label="Duration of Pollution"
              component={renderInputField}
              style={[mainStyles.inputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="waterway_affected"
              label="Waterway Affected:"
              component={renderInputField}
              style={[mainStyles.inputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="describe_pollution"
              label="Describe the pollution:"
              component={renderInputField}
              options={{ multiline: true, numberOfLines: 2 }}
              style={[styles.multilineInputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1, flexDirection: 'row' }]}>
            <View style={{ flex: 1 }}>
              <Text style={mainStyles.label}>Location saved as current location.</Text>
              <Text style={mainStyles.label}>Click here to set to a different location.</Text>
            </View>
            <View>
              <Image
                style={{ height: 37, width: 24 }}
                source={locationLogo}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

StepFirst.propTypes = {
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    pollutionObservedAt: selector(state, 'pollution_observed_at'),
    initialValues: { pollution_observed_at: moment().format() },
  };
}

const StepFirstForm = reduxForm({
  form: 'pollutionReportForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StepFirst);

export default connect(mapStateToProps)(StepFirstForm);
