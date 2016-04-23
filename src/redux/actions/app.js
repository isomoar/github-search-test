export const SEARCH_VALUE_CHANGE = 'SEARCH_VALUE_CHANGE';
export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_ERROR = 'GET_REPOS_ERROR';

export const searchValueChange = (value) => 
({
  type: SEARCH_VALUE_CHANGE,
  value,
})