import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 4,
    padding: 20,
  },

  bottomSpace: {
    marginBottom: 20,
  },

  topSpace: {
    marginTop: 20,
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

  stepName: {
    paddingTop: 3,
    paddingBottom: 3,
    color: 'black',
  },

  imagePicker: {
    position: 'absolute',
    bottom: 50,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },

  topStepSecond: {
    flex: 1,
    minHeight: 100,
    marginBottom: 30,
  },
  dateTime: {
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center',
    width: '80%',
  },

  displayDateTime: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

export default styles;
