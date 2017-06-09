import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/home/';

const RouterWithRedux = connect()(Router);

const AppNavigator = () => (
  <RouterWithRedux>
    <Scene key="root">
      <Scene key="home" component={Home} hideNavBar initial />
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
