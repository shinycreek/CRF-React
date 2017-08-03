import { combineReducers } from 'redux-immutable';
import { reducer as reduxFormReducer } from 'redux-form/immutable';
import basinMap from './basinMap';
import crf from './crf';
import userSetting from './userSetting';
import trashLogger from './trashLogger';
import pollutionReport from './pollutionReport';
import authorityContact from './authorityContact';
import lakeLevels from './lakeLevels';
import recreationalReleases from './recreationalRelease';
import facebookPage from './facebookPage';
import instagramPage from './instagramPage';
import twitterPage from './twitterPage';

const rootReducer = combineReducers({
  basinMap,
  crf,
  userSetting,
  trashLogger,
  pollutionReport,
  authorityContact,
  lakeLevels,
  recreationalReleases,
  form: reduxFormReducer,
  facebookPage,
  instagramPage,
  twitterPage,
});

export default rootReducer;
