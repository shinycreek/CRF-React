import React from 'react';
import { View, Text, TextInput } from 'react-native';
import ModalPicker from 'react-native-modal-selector';
import PropTypes from 'prop-types';
import mainStyles from '../../assets/css/mainStyles';

const CountyList = ({ input, counties, meta: { touched, error } }) => {
  const allCounties = counties.map(
    (county, index) => ({ key: index, label: county }),
  );
  const countyStyles = [mainStyles.inputField, { color: 'black' }];
  if (touched && error) { countyStyles.push(mainStyles.inputError); }

  return (
    <View>
      <ModalPicker
        data={allCounties}
        initValue="Please select county"
        onChange={option => input.onChange(option.label)}
      >
        <TextInput
          {...input}
          style={countyStyles}
          editable={false}
          placeholder="Please select county"
          value={input.value}
        />
      </ModalPicker>
      {touched && error &&
        <Text style={mainStyles.errorText}>{error}</Text>
      }
    </View>
  );
};

CountyList.defaultProps = {
  counties: ['Alexander', 'Avery', 'Burke', 'Caldwell', 'Catawba', 'Chester', 'Fairfield', 'Gaston', 'Iredell', 'Kershaw', 'Lancaster', 'Lincoln', 'McDowell', 'Mecklenburg', 'Richland', 'Union', 'Watagua', 'York', 'Other (note in Description)'],
};

CountyList.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  counties: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.instanceOf(Object).isRequired,
};

export default CountyList;
