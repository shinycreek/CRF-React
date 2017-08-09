import axios from '../axios';
import * as types from '../constants/types';

export const getUserSetting = phoneId => (
  (dispatch) => {
    dispatch({ type: types.START_GET_USER_SETTING, phoneId });
    axios.post('/api/v1/user_settings/show.json',
      {
        phone_id: phoneId,
      },
    )
    .then((response) => {
      if (response.data.success === 0) {
        dispatch({ type: types.SUCCESS_GET_USER_SETTING, data: {} });
      } else {
        dispatch({ type: types.SUCCESS_GET_USER_SETTING, data: response.data });
      }
    })
    .catch(() => {
      dispatch({ type: types.SUCCESS_GET_USER_SETTING });
    });
  }
);

export const createUserSetting = params => (
  (dispatch) => {
    dispatch({ type: types.START_CREATE_USER_SETTING });
    return (
      axios.post('/api/v1/user_settings',
        {
          user_setting: params,
        },
      )
      .then((response) => {
        if (response.data.success === 0) {
          dispatch({ type: types.ERROR_CREATE_USER_SETTING });
        } else {
          dispatch(getUserSetting(params.phone_id));
          dispatch({ type: types.SUCCESS_GET_USER_SETTING });
        }
      })
      .catch((error) => {
        dispatch({ type: types.ERROR_CREATE_USER_SETTING });
      })
    );
  }
);

export const updateUserSetting = params => (
  (dispatch) => {
    dispatch({ type: types.START_UPDATE_USER_SETTING });
    return (
      axios.put('/api/v1/user_settings/update.json',
        {
          user_setting: params,
        },
      )
      .then((response) => {
        if (response.data.success === 0) {
          dispatch({ type: types.ERROR_UPDATE_USER_SETTING });
        } else {
          dispatch(getUserSetting(params.phone_id));
          dispatch({ type: types.SUCCESS_GET_USER_SETTING });
        }
      })
      .catch(() => {
        dispatch({ type: types.ERROR_UPDATE_USER_SETTING });
      })
    );
  }
);
