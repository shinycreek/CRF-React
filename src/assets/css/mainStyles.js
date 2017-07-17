import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#272b71',
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
  row1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D8D8D8',
    padding: 10,
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#C7C7C7',
    padding: 10,
  },
  marginFromNav: {
    flex: 1,
    marginTop: 50,
  },
  // font styles
  bold: {
    fontWeight: 'bold',
  },
  textColorBlue: {
    color: '#272b71',
  },
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 25,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 15,
  },
  h5: {
    fontSize: 10,
  },
  h6: {
    fontSize: 5,
  },
  // end font styles
});

export default mainStyles;
