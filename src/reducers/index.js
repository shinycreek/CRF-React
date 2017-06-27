import { combineReducers } from 'redux-immutable';
import { reducer as reduxFormReducer } from 'redux-form/immutable';
import basinMap from './basinMap';
import crf from './crf';
import userSetting from './userSetting';

const rootReducer = combineReducers({
  basinMap,
  crf,
  userSetting,
  form: reduxFormReducer,
});

export default rootReducer;
