import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { record: [], phoneId: null, submitting: false, errors: [] },
);

const userSetting = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GET_USER_SETTING:
      return state.merge({ submitting: true, phoneId: action.phoneId });
    case types.SUCCESS_GET_USER_SETTING:
      return state.merge({ record: action.data.user_setting, submitting: false });
    case types.ERROR_GET_USER_SETTING:
      return state.merge({ submitting: false });

    case types.START_CREATE_USER_SETTING:
      return state.merge({ submitting: true, errors: [] });
    case types.SUCCESS_CREATE_USER_SETTING:
      return state.merge({ submitting: false });
    case types.ERROR_CREATE_USER_SETTING:
      return state.merge({ submitting: false, errors: action.errors });

    case types.START_UPDATE_USER_SETTING:
      return state.merge({ submitting: true, errors: [] });
    case types.SUCCESS_UPDATE_USER_SETTING:
      return state.merge({ submitting: false });
    case types.ERROR_UPDATE_USER_SETTING:
      return state.merge({ submitting: false, errors: action.errors });
    default:
      return state;
  }
};

export default userSetting;
