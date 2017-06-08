import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/configureStore';

const App = () => (
  <Provider store={store}>
    <View><Text>Good test</Text></View>
  </Provider>
);

export default App;
