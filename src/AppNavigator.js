import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/home/';
import BasinMap from './containers/basinMap/';
import CRF from './containers/crf/';
import UserSetting from './containers/userSetting/';
import TrashLogger from './containers/trashLogger/';
import PollutionReport from './containers/pollutionReport';
import AuthorityContact from './containers/authorityContact/';
import LakeLevel from './containers/lakeLevel/';
import WaterDam from './containers/recreationalRelease/WaterDam';
import FlowArrivalLocation from './containers/recreationalRelease/FlowArrivalLocation';
import FollowUs from './containers/followUs';
import FacebookPage from './containers/followUs/FacebookPage';
import InstagramPage from './containers/followUs/InstagramPage';
import TwitterPage from './containers/followUs/TwitterPage';
import { renderRightButton, renderHomeButton, renderCloseButton } from './components/navbarComponent/';
import SplashScreen from './containers/home/';
import mainStyles from './assets/css/mainStyles';

const RouterWithRedux = connect()(Router);

const AppNavigator = () => (
  <RouterWithRedux>
    <Scene
      key="root"
      navigationBarStyle={mainStyles.navBar}
      titleStyle={mainStyles.navBarTitleStyle}
    >
      <Scene
        key="splashScreen"
        component={SplashScreen}
        initial
        hideNavBar
      />
      <Scene
        key="home"
        component={Home}
        hideNavBar={false}
        renderBackButton={() => null}
        renderRightButton={() => renderRightButton()}
        title="Catawba Riverkeeper"
      />
      <Scene
        key="basinMap"
        hideNavBar={false}
        component={BasinMap}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
        navigationBarStyle={mainStyles.navBarBasinColor}
      />
      <Scene
        key="crf"
        hideNavBar={false}
        component={CRF}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
        navigationBarStyle={mainStyles.navBarCRFColor}
      />
      <Scene
        key="userSetting"
        hideNavBar={false}
        component={UserSetting}
        renderBackButton={() => renderHomeButton()}
        title="Contact Info"
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
        title="Pollution Reporter"
        navigationBarStyle={mainStyles.navBarPRColor}
      />
      <Scene
        key="authorityContact"
        hideNavBar={false}
        component={AuthorityContact}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Authority Contacts"
        navigationBarStyle={mainStyles.navBarAuthorityColor}
      />
      <Scene
        key="lakeLevels"
        hideNavBar={false}
        component={LakeLevel}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Lake Levels"
        navigationBarStyle={mainStyles.navBarLakeLevelColor}
      />
      <Scene
        key="waterDams"
        hideNavBar={false}
        component={WaterDam}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Recreational Releases"
        navigationBarStyle={mainStyles.navBarRecreationalColor}
      />
      <Scene
        key="flowArrivalLocation"
        hideNavBar={false}
        component={FlowArrivalLocation}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Recreational Releases"
      />
      <Scene
        key="followUs"
        hideNavBar={false}
        component={FollowUs}
        renderBackButton={() => renderHomeButton()}
        renderRightButton={() => renderRightButton()}
        title="Follw Us!"
        navigationBarStyle={mainStyles.navBarFollowUsColor}
      />
      <Scene
        key="facebookPage"
        hideNavBar={false}
        component={FacebookPage}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
        navigationBarStyle={mainStyles.navBarFollowUsColor}
      />
      <Scene
        key="instagramPage"
        hideNavBar={false}
        component={InstagramPage}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
        navigationBarStyle={mainStyles.navBarFollowUsColor}
      />
      <Scene
        key="twitterPage"
        hideNavBar={false}
        component={TwitterPage}
        renderBackButton={() => renderCloseButton()}
        renderRightButton={() => renderRightButton()}
        navigationBarStyle={mainStyles.navBarFollowUsColor}
      />
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
