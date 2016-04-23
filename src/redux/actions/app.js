import { debounce } from 'underscore';
import request from 'utils/request';

export const SEARCH_INPUT_VALUE_CHANGE = 'SEARCH_INPUT_VALUE_CHANGE';
export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_ERROR = 'GET_REPOS_ERROR';

export const searchInputValueChange = (value) => ({
  type: SEARCH_INPUT_VALUE_CHANGE,
  value,
});

export const getReposRequest = () => ({
  type: GET_REPOS_REQUEST,
})

export const getReposSuccess = (items) => ({
  type: GET_REPOS_SUCCESS,
  items,
})

export const getReposError = () => ({
  type: GET_REPOS_ERROR,
})

export const getRepos = (value) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(searchInputValueChange(value));
    
    function makeRequest() {
      if (getState().app.pending) return;
      
      dispatch(getReposRequest());
      
      request(`/search/repositories?q=${value} in:name user:facebook`, {
        method: 'get',
      })
      .then(res => {
        if (!res.items) return dispatch(getReposError());
        return dispatch(getReposSuccess(res.items));
      }, (res => {
        return dispatch(getReposError());
      }));
    }
    
    const fn = debounce(makeRequest, 500);
    fn();
  }
}