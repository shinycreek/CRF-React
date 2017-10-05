import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  {
    submitting: false,
    errors: [],
    latitude: null,
    longitude: null,
    fetchLocation: false,
  },
);

const PollutionReport = (state = initialState, action) => {
  switch (action.type) {
    case types.START_CREATE_POLLUTION_REPORT:
      return state.merge({ submitting: true, errors: [] });
    case types.SUCCESS_CREATE_POLLUTION_REPORT:
      return state.merge({ submitting: false });
    case types.ERROR_CREATE_POLLUTION_REPORT:
      return state.merge({ submitting: false, errors: action.errors });
    case types.UPDATE_DEVICE_LOCATION:
      console.log(action);
      return state.merge({
        latitude: action.latitude,
        longitude: action.longitude,
        fetchLocation: action.fetchLocation,
      });
    default:
      return state;
  }
};

export default PollutionReport;
