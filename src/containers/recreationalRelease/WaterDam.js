import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { getDams } from '../../actions/recreationalRelease';
import WaterRelease from '../../components/recreationalRelease/WaterRelease';
import mainStyles from '../../assets/css/mainStyles';
import styles from './styles';

class WaterDam extends React.Component {

  componentDidMount() {
    this.props.actions.getDams();
  }

  render() {
    const { dams } = this.props;
    return (
      <View style={[mainStyles.container, mainStyles.marginFromNav]}>
        <View style={styles.topText}>
          <Text style={[mainStyles.colorWhite, { marginLeft: 30, marginTop: 20, fontSize: 16 }]} >
            Showing Catawba River water release times by name of the dam releasing
          </Text>
        </View>
        <View style={styles.topText}>
          <Text style={[mainStyles.colorWhite, { marginLeft: 30, marginTop: 20, fontSize: 16 }]} >
            Click on a dam to see arrival/recession times
          </Text>
        </View>
        <ScrollView
          style={[
            mainStyles.box,
            styles.scrollView,
          ]}
        >
          <View style={styles.tableView}>
            {dams.map(dam => (
              <View key={`dam${dam.get('id')}`} style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={() => Actions.flowArrivalLocation({ damId: dam.get('id') })}>
                    <Text
                      style={[
                        mainStyles.h3,
                        mainStyles.bold,
                        mainStyles.textColorBlue,
                        { marginTop: 20 },
                      ]}
                    >
                      {dam.get('name')}
                    </Text>
                  </TouchableOpacity>
                  <WaterRelease waterReleases={dam.get('water_releases').toJS()} />
                </View>

              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

WaterDam.propTypes = {
  actions: PropTypes.shape({
    getDams: PropTypes.func.isRequired,
  }).isRequired,
  dams: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => (
  {
    dams: state.getIn(['recreationalReleases', 'dams']),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ getDams }, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(WaterDam);
