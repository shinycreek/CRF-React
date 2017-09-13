import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },

  // ========== containers under main container ==========
  topContainer: {
    flex: 6,
    flexDirection: 'column',
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  // ========== containers under topContainer ==========
  logoContainer: {
    flex: 1.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
  },

  textContainer: {
    flex: 3,
    paddingLeft: 35,
    paddingRight: 35,
  },

  // ========== style for Texts under textContainer ==========
  textFontStyle: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Akzidenz-Grotesk BQ',
    textAlign: 'justify',
    marginBottom: 10,
  },

  // ========== style for button under buttonContainer ==========

  button: {
    paddingTop: 12,
    paddingBottom: 12,
  },

  buttonFontStyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
  },

  skipButton: {
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#919090',
  },

  contactInfoButton: {
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#2C3B8B',
  },

  // ========== style for contactInfo ==========
  infoContainer: {
    flex: 1,
    marginTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },

  infoTextFontStyle: {
    color: 'white',
    fontFamily: 'Akzidenz-Grotesk BQ',
    textAlign: 'justify',
    marginBottom: 20,
    fontSize: 20,
  },

});

export default styles;
