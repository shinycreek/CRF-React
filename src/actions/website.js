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

export const fetchFacebookPageUrl = () => (
  (dispatch) => {
    dispatch({ type: types.START_FETCH_FACEBOOK_PAGE_URL });
    axios.get('/api/v1/websites/facebook_page.json')
    .then((response) => {
      dispatch({ type: types.SUCCESS_FETCH_FACEBOOK_PAGE_URL, url: response.data.url });
    })
    .catch(() => {
      dispatch({ type: types.ERROR_FETCH_FACEBOOK_PAGE_URL });
    });
  }
);

export const fetchInstagramPageUrl = () => (
  (dispatch) => {
    dispatch({ type: types.START_FETCH_INSTAGRAM_PAGE_URL });
    axios.get('/api/v1/websites/instagram_page.json')
    .then((response) => {
      dispatch({ type: types.SUCCESS_FETCH_INSTAGRAM_PAGE_URL, url: response.data.url });
    })
    .catch(() => {
      dispatch({ type: types.ERROR_FETCH_INSTAGRAM_PAGE_URL });
    });
  }
);

export const fetchTwitterPageUrl = () => (
  (dispatch) => {
    dispatch({ type: types.START_FETCH_TWITTER_PAGE_URL });
    axios.get('/api/v1/websites/twitter_page.json')
    .then((response) => {
      dispatch({ type: types.SUCCESS_FETCH_TWITTER_PAGE_URL, url: response.data.url });
    })
    .catch(() => {
      dispatch({ type: types.ERROR_FETCH_TWITTER_PAGE_URL });
    });
  }
);
