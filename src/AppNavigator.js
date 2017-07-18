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
import LakeLevel from './containers/lakeLevel/';
import WaterDam from './containers/recreationalRelease/WaterDam';
import FlowArrivalLocation from './containers/recreationalRelease/FlowArrivalLocation';
import { renderRightButton, renderHomeButton, renderCloseButton } from './components/navbarComponent/';

const RouterWithRedux = connect()(Router);

const AppNavigator = () => (
  <RouterWithRedux>
    <Scene
      key="root"
      navigationBarStyle={{ backgroundColor: '#5534B4' }}
      titleStyle={{ color: 'white' }}
    >
      <Scene key="home" component={Home} initial hideNavBar />
      <Scene
        key="basinMap"
        hideNavBar={false}
        component={BasinMap}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
      />
      <Scene
        key="crf"
        hideNavBar={false}
        component={CRF}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
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
        renderRightButton={() => renderRightButton()}
        title="Trash Logger"
      />
      <Scene
        key="pollutionReport"
        hideNavBar={false}
        component={PollutionReport}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Pollution Report"
      />
      <Scene
        key="authorityContact"
        hideNavBar={false}
        component={AuthorityContact}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Authority Contact"
      />
      <Scene
        key="lakeLevels"
        hideNavBar={false}
        component={LakeLevel}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Lake Levels"
      />
      <Scene
        key="waterDams"
        hideNavBar={false}
        component={WaterDam}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Recreational Releases"
      />
      <Scene
        key="flowArrivalLocation"
        hideNavBar={false}
        component={FlowArrivalLocation}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Recreational Releases"
      />
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
