import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { getFlowArrivalLocation } from '../../actions/recreationalRelease';
import WaterArrive from '../../components/recreationalRelease/WaterArrive';
import Footer from '../../components/footer/';
import mainStyles from '../../assets/css/mainStyles';
import styles from './styles';
import BackgroundImage from '../../components/appBackground/';

class FlowArrivalLocation extends React.Component {

  componentDidMount() {
    this.props.actions.getFlowArrivalLocation(this.props.damId);
  }

  render() {
    const { flowArrivalLocations } = this.props;
    return (
      <BackgroundImage>
        <View style={[mainStyles.container, mainStyles.marginFromNav]}>
          <View style={styles.topText}>
            <Text style={[mainStyles.textFont, mainStyles.clearTextBg, styles.recreationalTopText]} >
            Scheduled arrival and recession times below the dam:
            </Text>
          </View>
          <ScrollView
            style={[
              mainStyles.box,
              styles.scrollView,
            ]}
          >
            <View style={{ flex: 1 }}>
              {flowArrivalLocations.map((flowArrivalLocation, index) => (
                <View key={`flowArrivalLocation${index}`} style={[mainStyles.mBottom20, { flex: 1, flexDirection: 'row' }]}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        mainStyles.f14,
                        mainStyles.bold,
                        mainStyles.pLeft20,
                        {
                          fontFamily: 'Akzidenz Gr',
                          color: '#00458B',
                        },
                      ]}
                    >
                      {flowArrivalLocation.get('name')}
                    </Text>
                    <WaterArrive waterArrives={flowArrivalLocation.get('flow_arrival_recessions').toJS()} />
                  </View>

                </View>
              ))}
            </View>
          </ScrollView>
          <Footer
            left
            onPressLeft={() => Actions.pop()}
          />
        </View>
      </BackgroundImage>
    );
  }
}

FlowArrivalLocation.propTypes = {
  actions: PropTypes.shape({
    getFlowArrivalLocation: PropTypes.func.isRequired,
  }).isRequired,
  flowArrivalLocations: PropTypes.instanceOf(Object).isRequired,
  damId: PropTypes.number.isRequired,
};

const mapStateToProps = state => (
  {
    flowArrivalLocations: state.getIn(['recreationalReleases', 'flowArrivalLocations']),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ getFlowArrivalLocation }, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FlowArrivalLocation);
