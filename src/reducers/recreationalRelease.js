import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { dams: [], flowArrivalLocations: [] },
);

const recreationalReleases = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GET_DAM_DETAILS:
      return state.merge({ dams: [], flowArrivalLocations: [] });
    case types.SUCCESS_GET_DAM_DETAILS:
      return state.merge({ dams: action.data });
    case types.START_GET_FLOW_ARRIVAL_LOCATION:
      return state.merge({ flowArrivalLocations: [] });
    case types.SUCCESS_GET_FLOW_ARRIVAL_LOCATION:
      return state.merge({ flowArrivalLocations: action.data });
    default:
      return state;
  }
};

export default recreationalReleases;
