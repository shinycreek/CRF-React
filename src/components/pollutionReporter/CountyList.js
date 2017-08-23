import React from 'react';
import { TextInput } from 'react-native';
import ModalPicker from 'react-native-modal-selector';
import PropTypes from 'prop-types';
import mainStyles from '../../assets/css/mainStyles';

const CountyList = ({ input, counties }) => {
  const allCounties = counties.map(
    (county, index) => ({ key: index, label: county }),
  );

  return (
    <ModalPicker
      data={allCounties}
      initValue="Please select county"
      onChange={option => input.onChange(option.label)}
    >
      <TextInput
        {...input}
        style={[mainStyles.inputField, { color: 'black' }]}
        editable={false}
        placeholder="Please select county"
        value={input.value}
      />
    </ModalPicker>
  );
};

CountyList.defaultProps = {
  counties: ['Alexander', 'Avery', 'Burke', 'Caldwell', 'Catawba', 'Chester', 'Fairfield', 'Gaston', 'Iredell', 'Kershaw', 'Lancaster', 'Lincoln', 'McDowell', 'Mecklenburg', 'Richland', 'Union', 'Watagua', 'York', 'Other (note in Description)'],
};

CountyList.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  counties: PropTypes.arrayOf(PropTypes.string),
};

export default CountyList;
