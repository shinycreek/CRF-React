import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  middle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  arrowRight: {
    width: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },

  arrowLeft: {
    width: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

});

export default styles;
