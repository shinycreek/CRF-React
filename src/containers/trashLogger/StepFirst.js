import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { renderInputField } from '../../components/fields/';
import renderCountyList from '../../components/pollutionReporter/CountyList';
import mainStyles from '../../assets/css/mainStyles';
import { locationLogo } from '../../constants/images';
import MapModal from '../../components/pollutionReporter/MapModal';

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

    this.state = {
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

  render() {
    return (
      <View>
        <View style={[mainStyles.box, mainStyles.bottomSpace, mainStyles.topSpace]}>
          <Field
            name="describe_trash"
            label="Describe the trash and anything large or unique:"
            component={renderInputField}
            options={{ multiline: true, numberOfLines: 2 }}
            style={[mainStyles.multilineInputField]}
          />
        </View>

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
            <TouchableOpacity onPress={() => this.toggleMapVisibility()}>
              <Image
                style={{ height: 37, width: 24 }}
                source={locationLogo}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Map View */}
        <MapModal
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          updateCoordinates={this.props.updateCoordinates}
          mapVisibility={this.state.mapVisibility}
          toggleMapVisibility={this.toggleMapVisibility}
        />
      </View>
    );
  }
}

StepFirst.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
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
