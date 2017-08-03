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
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#C7C7C7',
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
    borderBottomColor: '#5534B4',
  },
  navBarPRColor: {
    backgroundColor: '#D3451C',
    borderBottomColor: '#D3451C',
  },
  navBarCRFColor: {
    backgroundColor: '#AD163C',
    borderBottomColor: '#AD163C',
  },
  navBarBasinColor: {
    backgroundColor: '#008B00',
    borderBottomColor: '#008B00',
  },
  navBarAuthorityColor: {
    backgroundColor: '#2672F1',
    borderBottomColor: '#2672F1',
  },
  navBarLakeLevelColor: {
    backgroundColor: '#D3451C',
    borderBottomColor: '#D3451C',
  },
  navBarRecreationalColor: {
    backgroundColor: '#5534B4',
    borderBottomColor: '#5534B4',
  },
  navBarFollowUsColor: {
    backgroundColor: '#00829B',
    borderBottomColor: '#00829B',
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
  fWeight500: {
    fontWeight: '500',
  },
  textColorBlue: {
    color: '#272b71',
  },
  textColorLightBlue: {
    color: '#001E5B',
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

  f18: {
    fontSize: 18,
  },
  // end font styles

  // font style
  fontStyle: {
    fontFamily: 'AvenirNext-Bold',
  },

  label: {
    fontFamily: 'Akzidenz-Grotesk-B-Medium',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
    color: 'black',
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
  mBottom20: {
    marginBottom: 20,
  },
  mBottom50: {
    marginBottom: 50,
  },

  // padding css
  pLeft20: {
    paddingLeft: 20,
  },

  imagePicker: {
    width: 250,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
});

export default mainStyles;
