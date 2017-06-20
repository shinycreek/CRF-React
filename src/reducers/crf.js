import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { url: null, submitting: false },
);

const crf = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCH_CRF_URL:
      return state.merge({ submitting: true });
    case types.SUCCESS_FETCH_CRF_URL:
      return state.merge({ url: action.url, submitting: false });
    case types.ERROR_FETCH_CRF_URL:
      return state.merge({ submitting: false });
    default:
      return state;
  }
};

export default crf;
