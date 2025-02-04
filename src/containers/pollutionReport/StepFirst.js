import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { renderInputField } from '../../components/fields/';
import renderCountyList from '../../components/pollutionReporter/CountyList';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';
import { calendarLogo, clockLogo, locationLogo } from '../../constants/images';
import MapModal from '../../components/pollutionReporter/MapModal';

const selector = formValueSelector('trashLoggerTileForm');

const validate = (values) => {
  const errors = {};
  const describePollution = values.get('describe_pollution');
  const county = values.get('county');

  if (!describePollution) {
    errors.describe_pollution = 'Required';
  }

  if (!county) {
    errors.county = 'Required';
  }

  return errors;
};

class StepFirst extends React.Component {

  constructor(props) {
    super(props);
    this.handleDateTime = this.handleDateTime.bind(this);
    this.toggleMapVisibility = this.toggleMapVisibility.bind(this);
    this.renderDatePickerField = this.renderDatePickerField.bind(this);
    this.renderTimePickerField = this.renderTimePickerField.bind(this);

    this.state = {
      dateTime: moment().format(),
      mapVisibility: false,
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

  toggleMapVisibility() {
    this.setState({
      mapVisibility: !this.state.mapVisibility,
    });
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

    return (
      <View>
        <Text
          style={[
            mainStyles.whiteBgText,
            mainStyles.bottomSpace10,
            mainStyles.topSpace,
            mainStyles.clearTextBg,
          ]}
        >
          Report sediment, chemical and any other pollution in this form
          so we can help make sure authorities are notified and the pollution is addressed.
        </Text>

        <Text style={[mainStyles.whiteBgText, mainStyles.bottomSpace10, mainStyles.clearTextBg]}>
          To report trash for a cleanup, please use the Trash Logger tool instead.
        </Text>

        <View style={[mainStyles.box, mainStyles.topSpace, mainStyles.bottomSpace]}>

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
                <Text style={[mainStyles.fontAkzB, mainStyles.bodyText1]}>{displayDate}</Text>
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
                <Text style={[mainStyles.fontAkzB, mainStyles.bodyText1]}>{time}</Text>
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
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="pollution_address"
            label="Address where pollution observed:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Text style={mainStyles.label}>County where pollution observed: </Text>
          <Field name="county" component={renderCountyList} />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="pollution_duration"
            label="How long has this been happening?"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="waterway_affected"
            label="Waterway affected:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="describe_pollution"
            label="Describe the pollution:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="responsible_party"
            label="Party you believe responsible, if known:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, { marginBottom: 50, flexDirection: 'row' }]}>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => this.toggleMapVisibility()}>
            <View style={{ flex: 0.5 }}>
              <Text style={[mainStyles.label, { marginTop: 1 }]}>
                {
                  this.props.isLocationOn ?
                  'Pollution Report location saved as your current location. Click here to set a different location' :
                  'Enable GPS to save your current location, or click here to set the location of your Pollution Report'
                }
              </Text>
            </View>
            <View style={mainStyles.locationIconBox}>
              <Image style={{ height: 37, width: 24 }} source={locationLogo} resizeMode="cover" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Map View */}
        {
          this.state.mapVisibility &&
          <MapModal
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            updateCoordinates={this.props.updateCoordinates}
            mapVisibility={this.state.mapVisibility}
            toggleMapVisibility={this.toggleMapVisibility}
          />
        }
      </View>
    );
  }
}

StepFirst.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  updateCoordinates: PropTypes.func.isRequired,
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLocationOn: PropTypes.bool.isRequired,
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
