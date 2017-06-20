import { combineReducers } from 'redux-immutable';
import basinMap from './basinMap';
import crf from './crf';

const rootReducer = combineReducers({
  basinMap,
  crf,
});

export default rootReducer;
