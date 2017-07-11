import Immutable from 'immutable';
import * as types from '../constants/types';

const initialState = Immutable.fromJS(
  { contactDetails: [] },
);

const authorityContact = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AUTHORITY_CONTACT:
      return state.merge({ contactDetails: action.authorityContacts });
    default:
      return state;
  }
};

export default authorityContact;
