let redux = require('redux');
let {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (intitialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  let store = redux.createStore(reducer, intitialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store;
};