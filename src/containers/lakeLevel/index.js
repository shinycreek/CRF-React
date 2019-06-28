import React from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

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
            <Text style={[mainStyles.colorWhite, mainStyles.clearTextBg, { marginLeft: 30, marginTop: 20, fontSize: 16 }]} >
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
              <View style={{ flex: 1 }}>
                <Text>News</Text>
              </View>
            </View>

            {lakeLevels.map((ll, index) => (
              <View key={`lakeLevelRow${index}`} style={even(index) ? mainStyles.row1 : mainStyles.row2}>
                <View style={{ flex: 3 }}>
                  <Text>{ll.lake_name}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{ll.level}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{ll.target}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  {
                    !isEqual(ll.news, null)
                      ? (
                        <Text onPress={() => Actions.lakeNews({ lake_url: ll.lake_url })} style={{ color: 'blue' }}>
                          {moment(ll.news).format('MM/DD/YYYY') }
                        </Text>
                    ) : (
                      <Text>None</Text>
                    )
                  }
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
