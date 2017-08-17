import axios from '../axios';
import * as types from '../constants/types';

export const fetchBasinMap = () => (
  (dispatch) => {
    dispatch({ type: types.START_FETCH_BASIN_MAP_URL });
    axios.get('/api/v1/websites/basin_map.json')
    .then((response) => {
      dispatch({ type: types.SUCCESS_FETCH_BASIN_MAP_URL, url: response.data.url });
    })
    .catch(() => {
      dispatch({ type: types.ERROR_FETCH_BASIN_MAP_URL });
    });
  }
);

export const fetchCRF = () => (
  (dispatch) => {
    dispatch({ type: types.START_FETCH_CRF_URL });
    axios.get('/api/v1/websites/crf.json')
    .then((response) => {
      dispatch({ type: types.SUCCESS_FETCH_CRF_URL, url: response.data.url });
    })
    .catch(() => {
      dispatch({ type: types.ERROR_FETCH_CRF_URL });
    });
  }
);

export const fetchFollowUsPageUrl = websiteType => (
  (dispatch) => {
    dispatch({ type: types.START_FETCH_FOLLOW_US_PAGE_URL });
    axios.get('/api/v1/websites/follow_us.json', { params: { website_type: websiteType } })
    .then((response) => {
      dispatch({ type: types.SUCCESS_FETCH_FOLLOW_US_PAGE_URL, url: response.data.url });
    })
    .catch(() => {
      dispatch({ type: types.ERROR_FETCH_FOLLOW_US_PAGE_URL });
    });
  }
);
