import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/home/';
import BasinMap from './containers/basinMap/';
import CRF from './containers/crf/';
import UserSetting from './containers/userSetting/';
import TrashLogger from './containers/trashLogger/';
import PollutionReport from './containers/pollutionReport';
import AuthorityContact from './components/authorityContact/';
import { closeLogo } from './constants/images';
import { renderRightButton, renderHomeButton } from './components/navbarComponent/';

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
        renderRightButton={() => renderRightButton()}
        leftButtonIconStyle={{ height: 28, width: 30 }}
      />
      <Scene
        key="userSetting"
        hideNavBar={false}
        component={UserSetting}
        renderBackButton={() => renderHomeButton()}
        title="Settings"
      />
      <Scene
        key="trashLogger"
        hideNavBar={false}
        component={TrashLogger}
        renderBackButton={() => renderHomeButton()}
        leftButtonIconStyle={{ height: 28, width: 30 }}
        renderRightButton={() => renderRightButton()}
        title="Trash Logger"
      />
      <Scene
        key="pollutionReport"
        hideNavBar={false}
        component={PollutionReport}
        renderBackButton={() => renderHomeButton()}
        leftButtonIconStyle={{ height: 28, width: 30 }}
        renderRightButton={() => renderRightButton()}
        title="Pollution Report"
      />
<<<<<<< HEAD
      <Scene
        key="authorityContact"
        hideNavBar={false}
        component={AuthorityContact}
        renderBackButton={() => renderHomeButton()}
        leftButtonIconStyle={{ height: 28, width: 30 }}
        renderRightButton={() => renderRightButton()}
        title="Authority Contact"
      />
=======
>>>>>>> d1a0670f71ca093bc7b17e635d3b6c72d896159b
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
