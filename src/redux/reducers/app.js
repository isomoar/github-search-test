import { createReducer } from 'redux-create-reducer';
import { SEARCH_INPUT_VALUE_CHANGE, GET_REPOS_REQUEST, GET_REPOS_ERROR, GET_REPOS_SUCCESS, GET_REPO_OWNER_NAME_SUCCESS } from '../actions/app';

const initialState = {
  error: false,
  items: [],
  pending: false,
  placeholderText: '',
  repoOwnerName: '',
  searchInputValue: '',
};

function getPlaceholderText(value, items) {
  if (!value || value.length === 0) return '';
  
  const regexp = new RegExp(`^${value}(.*)$`, 'i');
  let pt = '';
  
  pt = items.find(e => {
    return regexp.test(e.name);
  }) || '';
  
  if (pt.name) {
    let [, rest] = regexp.exec(pt.name);
    if (typeof rest === 'string') pt = value + rest;
  }
  
  return pt;
}

function filterItems(value, items) {
  const regexp = new RegExp(`^${value}(.*)$`, 'i');
  return items.filter(item => regexp.test(item.name));
}

export default createReducer(initialState, {
  [SEARCH_INPUT_VALUE_CHANGE]: (state, action) => {
    return Object.assign({}, state, {
      items: filterItems(action.value, state.items),
      searchInputValue: action.value,
      placeholderText: getPlaceholderText(action.value, state.items),
    })
  },
  [GET_REPOS_REQUEST]: (state, action) => Object.assign({}, state, {
    pending: true,
  }),
  [GET_REPOS_ERROR]: (state, action) => Object.assign({}, state, {
    pending: false,
    error: true,
    showNothingFound: false,
  }),
  [GET_REPOS_SUCCESS]: (state, action) => {
    let items = action.items.map(elem => {
      return {
        name: elem.name,
        language: elem.language,
        description: elem.description,
        url: elem.html_url,
      }
    });
    items = filterItems(state.searchInputValue, items);
    
    return Object.assign({}, state, {
      pending: false,
      error: false,
      items,
      showNothingFound: items.length === 0,
      placeholderText: getPlaceholderText(state.searchInputValue, items),
    })
  },
  [GET_REPO_OWNER_NAME_SUCCESS]: (state, action) => Object.assign({}, state, {
    repoOwnerName: action.name,
  })
})