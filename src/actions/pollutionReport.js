import axios from '../axios';
import * as types from '../constants/types';

export const createPollutionReport = params => (
  (dispatch) => {
    dispatch({ type: types.START_CREATE_POLLUTION_REPORT });
    return (
      axios.post('/api/v1/pollution_reports.json',
        {
          pollution_report: params,
        },
      )
      .then(() => {
        dispatch({ type: types.SUCCESS_CREATE_POLLUTION_REPORT });
      })
      .catch(() => {
        dispatch({ type: types.ERROR_CREATE_POLLUTION_REPORT });
      })
    );
  }
);

export const setDeviceLocation = (latitude, longitude, fetchLocation) => (
  dispatch => (
    dispatch({ type: types.UPDATE_DEVICE_LOCATION, latitude, longitude, fetchLocation })
  )
);
