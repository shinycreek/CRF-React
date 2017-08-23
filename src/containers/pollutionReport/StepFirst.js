import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Picker,
  TextInput,
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';
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
    this.renderModalPicker = this.renderModalPicker.bind(this);
    this.state = {
      dateTime: moment().format(),
      textInputValue: '',
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
    } else {
      const newDateObj = moment(dateTime);
      momentObj.set({
        year: newDateObj.get('year'),
        month: newDateObj.get('month'),
        date: newDateObj.get('date'),
      });
    }
    this.setState({ dateTime: momentObj.format() }, () => {
      field.input.onChange(
        this.state.dateTime,
      );
    });
  }

  renderModalPicker({ input, data }) {
    return (
      <ModalPicker
        data={data}
        initValue="Please select county"
        onChange={option => input.onChange(option.label)}
      >
        <TextInput
          {...input}
          style={[mainStyles.inputField, { color: 'black' }]}
          editable={false}
          placeholder="Please select county"
          value={input.value}
        />
      </ModalPicker>
    );
  }

  renderDatePickerField(field) {
    return (
      <DatePicker
        date={field.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        maxDate={moment().format()}
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
    const counties = this.props.counties.map(
      (county, index) => ({ key: index, label: county }),
    );

    return (
      <View>
        <Text style={[mainStyles.textFont, styles.bottomSpace10, mainStyles.clearTextBg]}>
          Report sediment, chemical and any other pollution in this form
          so we can help make sure authorities are notified and the pollution addressed.
        </Text>
        <Text style={[mainStyles.textFont, styles.bottomSpace10, mainStyles.clearTextBg]}>
          Please try to document the pollution at the incident as well as
          upstream and downstream of any water impacts.
        </Text>
        <Text style={[mainStyles.textFont, mainStyles.clearTextBg]}>
          To report trash for a cleanup, please use the Trash Logger tool instead!
        </Text>
        <View style={[mainStyles.box, styles.bottomSpace, styles.topSpace, mainStyles.mBottom50]}>

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
              <View style={{ position: 'absolute', left: 20 }}>
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
              <View style={{ position: 'absolute', left: 20 }}>
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
              name="pollution_address"
              label="Address where pollution observed:"
              component={renderInputField}
              options={{ multiline: true, numberOfLines: 2 }}
              style={[mainStyles.multilineInputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Text style={mainStyles.label}>County where pollution observed: </Text>
            <Field
              name="county"
              component={this.renderModalPicker}
              data={counties}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="pollution_duration"
              label="How long has this been happening?"
              component={renderInputField}
              options={{ multiline: true, numberOfLines: 2 }}
              style={[mainStyles.multilineInputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="waterway_affected"
              label="Waterway affected:"
              component={renderInputField}
              options={{ multiline: true, numberOfLines: 2 }}
              style={[mainStyles.multilineInputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="describe_pollution"
              label="Describe the pollution:"
              component={renderInputField}
              options={{ multiline: true, numberOfLines: 2 }}
              style={[mainStyles.multilineInputField]}
            />
          </View>

          <View style={[mainStyles.mTop10, { flex: 1 }]}>
            <Field
              name="responsible_party"
              label="Party you believe responsible, if known"
              component={renderInputField}
              options={{ multiline: true, numberOfLines: 2 }}
              style={[mainStyles.multilineInputField]}
            />
          </View>

          <View style={[mainStyles.mTop20, { flex: 1, flexDirection: 'row' }]}>
            <View style={[mainStyles.mBottom20, { flex: 1 }]}>
              <Text style={mainStyles.label}>Location saved as current location.
                {'\n'}
                Click here to set to a different location.
              </Text>
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

StepFirst.defaultProps = {
  counties: ['Alexander', 'Avery', 'Burke', 'Caldwell', 'Catawba', 'Chester', 'Fairfield', 'Gaston', 'Iredell', 'Kershaw', 'Lancaster', 'Lincoln', 'McDowell', 'Mecklenburg', 'Richland', 'Union', 'Watagua', 'York'],
};

StepFirst.propTypes = {
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  counties: PropTypes.arrayOf(PropTypes.string),
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
