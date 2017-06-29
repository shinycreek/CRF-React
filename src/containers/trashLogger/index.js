import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
import StepFirst from './StepFirst';
import StepSecond from './StepSecond';
import StepThird from './StepThird';
import Footer from '../../components/footer/';

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

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      page: 1,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => Alert.alert('Location Error', JSON.stringify(error)),
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onSubmit(values) {
  }

  handleChildFormSubmit(handleSubmit) {
    this.setState({ handleSubmit });
  }

  nextPage(values) {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  stepName() {
    let message = '';
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
      case 4:
        message = 'Thank you!';
        break;
      default:
        message = '';
    }
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={[mainStyles.box, styles.stepName]}> { message }</Text>
      </View>
    );
  }

  render() {
    const { page, handleSubmit } = this.state;

    return (
      <View style={[mainStyles.container, styles.container]}>
        {this.stepName()}
        <KeyboardAwareScrollView>
          {page === 1 && <StepFirst handleChildFormSubmit={this.handleChildFormSubmit} />}
          {page === 2 && <StepSecond handleChildFormSubmit={this.handleChildFormSubmit} />}
          {page === 3 && <StepThird handleChildFormSubmit={this.handleChildFormSubmit} />}
        </KeyboardAwareScrollView>
        <Footer
          left={_.includes([2, 3], page)}
          onPressLeft={this.previousPage}
          right={_.includes([1, 2], page)}
          onPressRight={handleSubmit && handleSubmit(this.nextPage)}
          middle={page === 3}
          // onPressMiddle={handleSubmit(this.onSubmit)}
          middleButtonText="Submit Report"
        />
      </View>
    );
  }
}

export default TrashLogger;
