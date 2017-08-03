import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { url: null, submitting: false },
);

const instagramPage = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCH_INSTAGRAM_PAGE_URL:
      return state.merge({ submitting: true });
    case types.SUCCESS_FETCH_INSTAGRAM_PAGE_URL:
      return state.merge({ url: action.url, submitting: false });
    case types.ERROR_FETCH_INSTAGRAM_PAGE_URL:
      return state.merge({ submitting: false });
    default:
      return state;
  }
};

export default instagramPage;
