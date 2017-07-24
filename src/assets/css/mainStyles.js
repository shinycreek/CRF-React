import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 3,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

  multilineInputField: {
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    paddingLeft: 10,
  },

  fieldBorder: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
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
  navBar: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5534B4',
    borderBottomColor: '#5534B4', // #5534B4
  },
  navBarPRColor: {
    backgroundColor: '#D3451C', // #5534B4
    borderBottomColor: '#D3451C',
  },
  navBarTitleStyle: {
    color: 'white',
    marginBottom: 40,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
    width: 200,
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

  f14: {
    fontSize: 14,
  },
  // end font styles

  // font style
  fontStyle: {
    fontFamily: 'AvenirNext-Bold',
  },

  label: {
    fontFamily: 'Akzidenz-Grotesk-B-Medium',
    fontSize: 14,
    marginBottom: 10,
  },

  fontAkzB: {
    fontFamily: 'Akzidenz-Grotesk-B-Medium',
    fontSize: 14,
  },

  // margin css
  mTop10: {
    marginTop: 10,
  },
  mTop20: {
    marginTop: 20,
  },
});

export default mainStyles;
