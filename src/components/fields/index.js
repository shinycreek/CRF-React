import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import PropTypes from 'prop-types';
import mainStyles from '../../assets/css/mainStyles';
import styles from './styles';

export const renderInputField = ({
  input: { onChange, ...restInput }, style, meta: { touched, error }, options, label,
}) => {
  const arrStyles = [style];
  if (touched && error) {
    arrStyles.push(mainStyles.inputError);
  }
  return (
    <View>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        onChangeText={onChange}
        {...restInput}
        style={arrStyles}
        underlineColorAndroid="transparent"
        {...options}
      />
      {touched && error &&
        <Text style={mainStyles.errorText}>{error}</Text>
      }
    </View>
  );
};

renderInputField.propTypes = {
  style: PropTypes.instanceOf(Object),
  input: PropTypes.instanceOf(Object),
  meta: PropTypes.instanceOf(Object),
  options: PropTypes.instanceOf(Object),
  label: PropTypes.string,
};
