import { createReducer } from 'redux-create-reducer';
import { GET_REPOS_REQUEST, GET_REPOS_ERROR, GET_REPOS_SUCCESS } from '../actions/app';

const initialState = {};

export default createReducer(initialState, {
  [GET_REPOS_REQUEST]: (state, action) => Object.assign({}, state, {
    pending: true,
  }),
  [GET_REPOS_ERROR]: (state, action) => Object.assign({}, state, {
    pending: false,
  }),
  [GET_REPOS_SUCCESS]: (state, action) => Object.assign({}, state, {
    pending: false,
  }),
})