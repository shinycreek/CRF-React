import { combineReducers } from 'redux-immutable';
import { reducer as reduxFormReducer } from 'redux-form/immutable';
import basinMap from './basinMap';
import crf from './crf';

const rootReducer = combineReducers({
  basinMap,
  crf,
  form: reduxFormReducer,
});

export default rootReducer;
