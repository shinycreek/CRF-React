import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  confirmBoxContainer: {
    bottom: 20,
    height: 130,
    position: 'absolute',
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0,
    borderTopWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  closeMapButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    alignItems: 'center',
  },
});

export default styles;
