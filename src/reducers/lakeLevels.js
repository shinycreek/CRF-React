import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { lakeLevels: [] },
);

const lakeLevels = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LAKE_LEVELS:
      return state.merge({ lakeLevels: action.lakeLevels });
    default:
      return state;
  }
};

export default lakeLevels;
