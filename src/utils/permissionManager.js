import React from 'react';
import Permissions from 'react-native-permissions';
import {
  PermissionsAndroid, Platform, Alert,
} from 'react-native';

export const locationPermission = async (callback) => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    Permissions.check('location').then(response => {
      if (response !== 'denied' && response !== 'undetermined') {
        callback(true);
      } else {
        Permissions.request('location').then(res => {
          if (res !== 'denied') {
            callback(true);
          } else {
            Alert.alert(
              'Location Permission',
              'Please grant Location permission.',
              [
                {text: 'Got To Settings', onPress: () => Permissions.openSettings()},
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            );
          }
        });
      }
    });
  }
}

export const cameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
    } catch (err) {
      console.warn(err);
    }
  } else {
      Permissions.check('camera').then(response => {
        if (response !== 'denied' && response !== 'undetermined') {
          return true;
        } else {
          Permissions.request('camera').then(res => {
            if (res !== 'denied') {
              return true;
            } else {
              Alert.alert(
                'Camera Permission',
                'Please grant Camera permission.',
                [
                  {text: 'Got To Settings', onPress: () => Permissions.openSettings()},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                  },
                ],
                {cancelable: false},
              );
            }
          });
        }
    });
  }
}

export const storagePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
    } catch (err) {
      console.warn(err);
    }
  } else {
      Permissions.check('photo').then(response => {
        if (response !== 'denied' && response !== 'undetermined') {
          return true;
        } else {
          Permissions.request('photo').then(res => {
            if (res !== 'denied') {
              return true;
            } else {
              Alert.alert(
                'Photo Permission',
                'Please grant Photo permission.',
                [
                  {text: 'Got To Settings', onPress: () => Permissions.openSettings()},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                  },
                ],
                {cancelable: false},
              );
            }
          });
        }
    });
  }
  return null;
}
