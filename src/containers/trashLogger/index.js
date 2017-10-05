import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserSetting, updateUserSetting } from '../../actions/userSetting';
import { createTrashLogger } from '../../actions/trashLogger';
import { setDeviceLocation } from '../../actions/pollutionReport';
import StepFirst from './StepFirst';
import StepSecond from './StepSecond';
import StepThird from './StepThird';
import Footer from '../../components/footer/';
import BackgroundImage from '../../components/appBackground/';
import mainStyles from '../../assets/css/mainStyles';
import styles from './styles';

class TrashLogger extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.stepName = this.stepName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChildFormSubmit = this.handleChildFormSubmit.bind(this);
    this.handleShowRightArrow = this.handleShowRightArrow.bind(this);
    this.updateCoordinates = this.updateCoordinates.bind(this);

    this.state = {
      latitude: null,
      longitude: null,
      page: 1,
      showRightArrow: false,
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          actions.setDeviceLocation(latitude, longitude, true);
          navigator.geolocation.clearWatch(this.watchId);
        }
      },
      () => Alert.alert('Trash Logger uses GPS to track pollution location', 'Please enable GPS',
        [
          { text: 'OK' },
        ],
        { cancelable: false }),
        { distanceFilter: 1 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onSubmit(values) {
    const phone = values.get('phone');
    const email = values.get('email');
    const record = this.props.userSetting.get('record');
    const phoneId = this.props.userSetting.get('phoneId');
    const { latitude, longitude } = this.state;
    const formValues = values.merge({ latitude, longitude, phone_id: phoneId }).toJS();

    if ((!record || record.size === 0) && (email || phone)) {
      this.props.actions.createUserSetting({ phone_id: phoneId, email, phone });
    }

    this.props.actions.createTrashLogger(formValues).then(() => {
      this.props.actions.reset('trashLoggerTileForm');
      this.nextPage();
    });
  }

  handleChildFormSubmit(handleSubmit) {
    this.setState({ handleSubmit });
  }

  handleShowRightArrow(show) {
    this.setState({ showRightArrow: show });
  }

  updateCoordinates(latitude, longitude) {
    this.setState({ latitude, longitude });
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  stepName() {
    let message = '';
    let body = null;

    switch (this.state.page) {
      case 1:
        message = 'Step 1: Describe the Trash';
        break;
      case 2:
        message = 'Step 2: Take a Photo';
        break;
      case 3:
        message = 'Step 3: Submit this log';
        break;
      default:
        message = 'Thank you!';
        body = 'Your report has been logged and will be used to help us keep the waterways cleaner.';
    }
    const response = [
      <View style={{ flexDirection: 'row', justifyContent: 'center' }} key="stepName1">
        <Text
          style={[mainStyles.box, styles.stepName, mainStyles.fontStyle, mainStyles.bodyText2]}
        >
          { message }
        </Text>
      </View>,
    ];

    if (body) {
      response.push(
        <Text key="stepName2" style={[mainStyles.whiteBgText, mainStyles.clearTextBg, { marginBottom: 10, marginTop: 20 }]}>
          {body}
        </Text>);
    }

    return (
      response
    );
  }

  render() {
    const { page, handleSubmit, latitude, longitude } = this.state;
    return (
      <BackgroundImage>
        <View style={[mainStyles.container, styles.container]}>
          {this.stepName()}
          {page === 1 &&
            <KeyboardAwareScrollView>
              <StepFirst
                handleChildFormSubmit={this.handleChildFormSubmit}
                latitude={latitude || this.props.latitude}
                longitude={longitude || this.props.longitude}
                updateCoordinates={this.updateCoordinates}
                isLocationOn={this.props.fetchLocation}
              />
            </KeyboardAwareScrollView>
          }
          {page === 2 &&
            <StepSecond
              handleChildFormSubmit={this.handleChildFormSubmit}
              handleShowRightArrow={this.handleShowRightArrow}
            />
          }
          {page === 3 &&
            <KeyboardAwareScrollView>
              <StepThird handleChildFormSubmit={this.handleChildFormSubmit} />
            </KeyboardAwareScrollView>
          }
          <Footer
            left={_.includes([2, 3], page)}
            onPressLeft={this.previousPage}
            right={(page === 1) || (page === 2 && this.state.showRightArrow)}
            onPressRight={handleSubmit && handleSubmit(this.nextPage)}
            middle={page === 3}
            onPressMiddle={handleSubmit && handleSubmit(this.onSubmit)}
            middleButtonText="Submit Report"
          />
        </View>
      </BackgroundImage>
    );
  }
}

TrashLogger.defaultProps = {
  latitude: null,
  longitude: null,
};

TrashLogger.propTypes = {
  actions: PropTypes.shape({
    createUserSetting: PropTypes.func.isRequired,
    createTrashLogger: PropTypes.func.isRequired,
    updateUserSetting: PropTypes.func.isRequired,
    setDeviceLocation: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
  userSetting: PropTypes.instanceOf(Object).isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  fetchLocation: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    userSetting: state.get('userSetting'),
    latitude: state.getIn(['pollutionReport', 'latitude']),
    longitude: state.getIn(['pollutionReport', 'longitude']),
    fetchLocation: state.getIn(['pollutionReport', 'fetchLocation']),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({
      createUserSetting,
      updateUserSetting,
      createTrashLogger,
      setDeviceLocation,
      reset }, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TrashLogger);
