import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';


import { renderInputField } from '../../components/fields/';
import renderCountyList from '../../components/pollutionReporter/CountyList';
import mainStyles from '../../assets/css/mainStyles';
import { locationLogo, calendarLogo } from '../../constants/images';
import MapModal from '../../components/pollutionReporter/MapModal';
import styles from './styles';

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
  constructor(props) {
    super(props);
    this.toggleMapVisibility = this.toggleMapVisibility.bind(this);
    this.handleDateTime = this.handleDateTime.bind(this);
    this.renderDatePickerField = this.renderDatePickerField.bind(this);

    this.state = {
      dateTime: moment().format(),
      mapVisibility: false,
    };
  }

  componentDidMount() {
    this.props.handleChildFormSubmit(this.props.handleSubmit);
  }

  toggleMapVisibility() {
    this.setState({
      mapVisibility: !this.state.mapVisibility,
    });
  }

  handleDateTime(dateTime, field) {
    const momentObj = moment(this.state.dateTime);
    const newDateObj = moment(dateTime);
    momentObj.set({
      year: newDateObj.get('year'),
      month: newDateObj.get('month'),
      date: newDateObj.get('date'),
    });
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

  render() {
    const displayDate = moment(this.state.dateTime).format('MMM DD');
    const date = moment(this.state.dateTime).format('YYYY-MM-DD');
    return (
      <View>

        <Text
          style={
          [mainStyles.whiteBgText, mainStyles.bottomSpace10,
            mainStyles.topSpace, mainStyles.clearTextBg,
          ]}
        >
          Log trash in the river or on the bank for our next river cleanup!
        </Text>
        <Text style={[mainStyles.whiteBgText, mainStyles.bottomSpace10, mainStyles.clearTextBg]}>
          To report sediment, chemical and any other pollution, please use the Pollution
          Reporter tool instead.
        </Text>

        <View style={[mainStyles.box, mainStyles.bottomSpace, mainStyles.topSpace]}>
          <Field
            name="describe_trash"
            label="Describe the trash and anything large or unique:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>
        {/* calender starts */}

        <View style={[mainStyles.box, mainStyles.topSpace, mainStyles.bottomSpace]}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[mainStyles.label]}>Date Observed:</Text>
            <View style={{ flex: 0, flexDirection: 'row' }}>
              <View style={{ flex: 0.1 }} />
              <TouchableOpacity
                onPress={() => this.datePicker.onPressDate()}
                style={[styles.dateTime, mainStyles.fieldBorder, { width: '80%' }]}
              >
                <View style={[styles.displayDateTime]}>
                  <Text style={[mainStyles.fontAkzB, mainStyles.bodyText1]}>{displayDate}</Text>
                </View>
                <View style={{ position: 'absolute', left: '4%' }}>
                  <Field
                    name="date_observed"
                    component={this.renderDatePickerField}
                    date={date}
                    onDateChange={this.handleDateTime}
                  />
                </View>

              </TouchableOpacity>
              <View style={{ flex: 0.1 }} />
            </View>
          </View>
        </View>

        {/* calender ends */}
        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="describe_location"
            label="Describe the location and extent of the trash:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Text style={mainStyles.label}>County where trash was observed: </Text>
          <Field
            name="county"
            component={renderCountyList}
          />
        </View>

        <View style={[mainStyles.box, mainStyles.bottomSpace]}>
          <Field
            name="adjacent_waterway"
            label="What is the name of the adjacent waterway? (If known)"
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
                  'Trash Logger location saved as your current location. Click here to set a different location' :
                  'Enable GPS to save your current location, or click here to set the location of your Trash Logger'
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

export default reduxForm({
  form: 'trashLoggerTileForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StepFirst);
