import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 4,
    padding: 20,
  },

  bottomSpace: {
    marginBottom: 20,
  },

  bottomSpace10: {
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)',

  },

  topSpace: {
    marginTop: 20,
  },

  stepName: {
    paddingTop: 3,
    paddingBottom: 3,
    color: 'black',
  },

  centerFlex: {
    flex: 1,
    alignItems: 'center',
  },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  imageContent: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  imageDimension: {
    height: 70,
    width: 80,
  },

  dateTime: {
    backgroundColor: 'white',
    height: 40,
    width: 120,
    flex: 0.8,
  },

  displayDateTime: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },

});

export default styles;
