import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import AppNavigator from './AppNavigator';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
