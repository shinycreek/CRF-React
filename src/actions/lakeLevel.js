import axios from '../axios';
import * as types from '../constants/types';

export const getLakeLevels = () => (
  (dispatch) => {
    axios.get('/api/v1/lake_levels.json')
    .then((response) => {
      dispatch({ type: types.GET_LAKE_LEVELS, lakeLevels: response.data.lake_levels });
    })
    .catch(() => {
      dispatch({ type: types.GET_LAKE_LEVELS, data: [] });
    });
  }
);
