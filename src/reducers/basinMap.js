import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { url: null, loaded: false },
);

const basinMap = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCH_BASIN_MAP_URL:
      return state.merge({ loaded: false });
    case types.SUCCESS_FETCH_BASIN_MAP_URL:
      return state.merge({ url: action.url, loaded: true });
    case types.ERROR_FETCH_BASIN_MAP_URL:
      return state.merge({ loaded: false });
    default:
      return state;
  }
};

export default basinMap;
