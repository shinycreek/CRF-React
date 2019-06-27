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
import BackgroundImage from '../../components/appBackground/';

class WaterDam extends React.Component {

  componentDidMount() {
    this.props.actions.getDams();
  }

  render() {
    const { dams } = this.props;
    return (
      <BackgroundImage>
        <View style={[mainStyles.container, mainStyles.marginFromNav]}>
          <View style={styles.topText}>
            <Text
              style={[mainStyles.whiteBgText, mainStyles.clearTextBg, styles.recreationalTopText]}
            >
              Catawba River scheduled flow releases by dam.{'\n'}
            </Text>
          </View>
          <View style={styles.topText}>
            <Text
              style={[mainStyles.whiteBgText, mainStyles.clearTextBg, styles.recreationalTopText]}
            >
              Click on a dam to see arrival/recession times.
            </Text>
          </View>
          <ScrollView
            style={[
              mainStyles.box,
              styles.scrollView,
            ]}
          >
            <View style={{ flex: 1 }}>
              {dams.map(dam => (
                <View key={`dam${dam.id}`} style={[mainStyles.mBottom20, { flex: 1, flexDirection: 'row' }]}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => Actions.flowArrivalLocation({ damId: dam.id })}>
                      <Text
                        style={[
                          mainStyles.bodyText1,
                          mainStyles.bold,
                          mainStyles.pLeft20,
                          {
                            fontFamily: 'Akzidenz Gr',
                            color: '#00458B',
                          },
                        ]}
                      >
                        {dam.name}
                      </Text>
                    </TouchableOpacity>
                    <WaterRelease waterReleases={dam.water_releases} />
                  </View>

                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </BackgroundImage>
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
