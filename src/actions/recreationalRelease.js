import axios from '../axios';
import * as types from '../constants/types';

export const getDams = () => (
  (dispatch) => {
    dispatch({ type: types.START_GET_DAM_DETAILS });
    axios.get('/api/v1/recreational_releases.json')
    .then((response) => {
      dispatch({ type: types.SUCCESS_GET_DAM_DETAILS, data: response.data.dams });
    })
    .catch(() => {
      dispatch({ type: types.SUCCESS_GET_DAM_DETAILS, data: [] });
    });
  }
);

export const getFlowArrivalLocation = damId => (
  (dispatch) => {
    dispatch({ type: types.START_GET_FLOW_ARRIVAL_LOCATION });
    axios.get(`/api/v1/recreational_releases/${damId}/flow_arrival_locations.json`)
    .then((response) => {
      dispatch({ type: types.SUCCESS_GET_FLOW_ARRIVAL_LOCATION, data: response.data.flow_arrival_locations });
    })
    .catch(() => {
      dispatch({ type: types.SUCCESS_GET_FLOW_ARRIVAL_LOCATION, data: [] });
    });
  }
);
