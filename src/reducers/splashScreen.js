import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { showedFirstTime: false },
);

const splashScreen = (state = initialState, action) => {
  switch (action.type) {
    case types.SPLASH_SCREEN_CLOSE:
      return state.merge({ showedFirstTime: true });
    default:
      return state;
  }
};

export default splashScreen;
