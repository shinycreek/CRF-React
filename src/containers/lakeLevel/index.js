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
import mainStyles from '../../assets/css/mainStyles';

class LakeLevel extends React.Component {

  componentDidMount() {
    this.props.actions.getLakeLevels();
  }

  render() {
    const { lakeLevels } = this.props;
    return (
      <View style={[mainStyles.container, { flex: 1, marginTop: 50 }]}>
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
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: (index % 2 === 0 ? '#D8D8D8' : '#C7C7C7'), padding: 10 }}>
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
