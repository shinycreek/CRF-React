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
import followUsPage from './followUsPage';

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
  followUsPage,
});

export default rootReducer;
