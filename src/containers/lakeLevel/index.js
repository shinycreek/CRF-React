import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getLakeLevels } from '../../actions/lakeLevel';
import { even } from '../../utils/extraLib';
import mainStyles from '../../assets/css/mainStyles';
import BackgroundImage from '../../components/appBackground/';

class LakeLevel extends React.Component {

  componentDidMount() {
    this.props.actions.getLakeLevels();
  }

  render() {
    const { lakeLevels } = this.props;
    return (
      <BackgroundImage>
        <View style={[mainStyles.container, mainStyles.marginFromNav]}>
          <View style={{ height: 50, flexDirection: 'row' }}>
            <Text style={[mainStyles.colorWhite, { marginLeft: 30, marginTop: 20, fontSize: 16 }]} >
              {"Lake level is 'full' at 100 feet."}
            </Text>
          </View>
          <ScrollView
            style={[
              mainStyles.box,
              { marginLeft: 30, marginRight: 30, marginBottom: 30, padding: 0 },
            ]}
          >
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEBEB7', padding: 10 }}>
              <View style={{ flex: 3 }}>
                <Text>Lake</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Level</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Target</Text>
              </View>
            </View>

            {lakeLevels.map((ll, index) => (
              <View key={`lakeLevelRow${index}`} style={even(index) ? mainStyles.row1 : mainStyles.row2}>
                <View style={{ flex: 3 }}>
                  <Text>{ll.get('lake_name')}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{ll.get('level')}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{ll.get('target')}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

LakeLevel.propTypes = {
  actions: PropTypes.shape({
    getLakeLevels: PropTypes.func.isRequired,
  }).isRequired,
  lakeLevels: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => (
  {
    lakeLevels: state.getIn(['lakeLevels', 'lakeLevels']),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ getLakeLevels }, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LakeLevel);
