import { createReducer } from 'redux-create-reducer';
import { GET_REPOS_REQUEST, GET_REPOS_ERROR, GET_REPOS_SUCCESS } from '../actions/app';

const initialState = {
  items: [],
  pending: false,
  error: false,
  placeholderValue: '',
  repoOwnerName: 'facebook',
};

export default createReducer(initialState, {
  [GET_REPOS_REQUEST]: (state, action) => Object.assign({}, state, {
    pending: true,
    error: false,
  }),
  [GET_REPOS_ERROR]: (state, action) => Object.assign({}, state, {
    pending: false,
    error: true,
  }),
  [GET_REPOS_SUCCESS]: (state, action) => Object.assign({}, state, {
    items: action.items.map(elem => {
      return {
        name: elem.name,
        description: elem.description,
        url: elem.html_url,
      }
    }),
    pending: false,
  }),
})