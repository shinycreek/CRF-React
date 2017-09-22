import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
  },
  top: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },

  bottom: {
    flex: 1,
    marginBottom: 50,
  },

  middle: {
    flex: 2,
    marginTop: 15,
    marginBottom: 20,
  },

  inputField: {
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    height: 40,
    backgroundColor: 'white',
  },

  label: {
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  footerButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 0.8,
  },

  arrowLeft: {
    width: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});

export default styles;
