import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { submitting: false, errors: [] },
);

const trashLogger = (state = initialState, action) => {
  switch (action.type) {
    case types.START_CREATE_TRASH_LOGGER:
      return state.merge({ submitting: true, errors: [] });
    case types.SUCCESS_CREATE_TRASH_LOGGER:
      return state.merge({ submitting: false });
    case types.ERROR_CREATE_TRASH_LOGGER:
      return state.merge({ submitting: false, errors: action.errors });
    default:
      return state;
  }
};

export default trashLogger;
