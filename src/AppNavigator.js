import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/home/';
import BasinMap from './containers/basinMap/';
import CRF from './containers/crf/';
import UserSetting from './components/userSetting/';
import { closeLogo } from './constants/images';
import { renderRightButton } from './components/navbarComponent/';

const RouterWithRedux = connect()(Router);

const AppNavigator = () => (
  <RouterWithRedux>
    <Scene key="root">
      <Scene key="home" component={Home} initial hideNavBar />
      <Scene
        key="basinMap"
        hideNavBar={false}
        component={BasinMap}
        backButtonImage={closeLogo}
        leftButtonIconStyle={{ height: 28, width: 30 }}
        renderRightButton={() => renderRightButton()}
      />
      <Scene
        key="crf"
        hideNavBar={false}
        component={CRF}
        backButtonImage={closeLogo}
        leftButtonIconStyle={{ height: 28, width: 30 }}
        renderRightButton={() => renderRightButton()}
      />
      <Scene
        key="userSetting"
        hideNavBar={false}
        component={UserSetting}
        backButtonImage={closeLogo}
        leftButtonIconStyle={{ height: 28, width: 30 }}
        direction="fade"
        title="Settings"
      />
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
