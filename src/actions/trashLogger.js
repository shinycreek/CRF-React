import axios from '../axios';
import * as types from '../constants/types';

export const createTrashLogger = params => (
  (dispatch) => {
    dispatch({ type: types.START_CREATE_TRASH_LOGGER });
    return (
      axios.post('/api/v1/trash_loggers.json',
        {
          trash_logger: params,
        },
      )
      .then(() => {
        dispatch({ type: types.SUCCESS_CREATE_TRASH_LOGGER });
      })
      .catch((error) => {
        dispatch({ type: types.ERROR_CREATE_TRASH_LOGGER });
      })
    );
  }
);
