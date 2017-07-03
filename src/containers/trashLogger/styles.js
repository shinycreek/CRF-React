import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 4,
    padding: 20,
  },

  inputField: {
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    height: 40,
    backgroundColor: 'white',
  },

  multilineInputField: {
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    backgroundColor: 'white',
  },

  bottomSpace: {
    marginBottom: 20,
  },

  topSpace: {
    marginTop: 20,
  },

  stepName: {
    fontWeight: 'bold',
    fontSize: 20,
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
    height: 100,
    width: 120,
  },

});

export default styles;
