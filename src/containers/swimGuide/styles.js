import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
  },

  socialMediaTile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialMediaBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00829B',
    padding: 30,
  },

  socialMediaLogoSize: {
    width: 80,
    height: 80,
  },
});

export default styles;
