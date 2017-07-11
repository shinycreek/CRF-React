import axios from '../axios';
import * as types from '../constants/types';

export const getAuthorityContacts = () => (
  (dispatch) => {
    axios.get('/api/v1/authority_contacts.json')
    .then((response) => {
      dispatch({ type: types.GET_AUTHORITY_CONTACT, authorityContacts: response.data.authority_contacts });
    })
    .catch(() => {
      dispatch({ type: types.GET_AUTHORITY_CONTACT, data: [] });
    });
  }
);
