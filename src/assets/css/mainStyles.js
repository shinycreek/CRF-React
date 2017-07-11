import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272b71',
  },
  errorText: {
    color: 'red',
  },
  inputError: {
    borderWidth: 2,
    borderColor: 'red',
  },
  box: {
    backgroundColor: '#D8D8D8',
    padding: 10,
  },
  textFont: {
    color: 'white',
    fontSize: 16,
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    height: 40,
    backgroundColor: 'white',
  },
  colorWhite: {
    color: 'white',
  },
});

export default mainStyles;
