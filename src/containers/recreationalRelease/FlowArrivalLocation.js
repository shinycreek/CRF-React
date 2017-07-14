import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getFlowArrivalLocation } from '../../actions/recreationalRelease';
import WaterArrive from '../../components/recreationalRelease/WaterArrive';
import mainStyles from '../../assets/css/mainStyles';
import styles from './styles';

class FlowArrivalLocation extends React.Component {

  componentDidMount() {
    this.props.actions.getFlowArrivalLocation(this.props.damId);
  }

  render() {
    const { flowArrivalLocations } = this.props;
    return (
      <View style={[mainStyles.container, mainStyles.marginFromNav]}>
        <View style={styles.topText}>
          <Text style={[mainStyles.colorWhite, { marginLeft: 30, marginTop: 20, fontSize: 16 }]} >
          Showing when water will arrive and decede at points below the dam.
          </Text>
        </View>
        <ScrollView
          style={[
            mainStyles.box,
            styles.scrollView,
          ]}
        >
          <View style={styles.tableView}>
            {flowArrivalLocations.map((flowArrivalLocation, index) => (
              <View key={`flowArrivalLocation${index}`} style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      mainStyles.h3,
                      mainStyles.bold,
                      mainStyles.textColorBlue,
                      { marginTop: 20 },
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
      </View>
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
