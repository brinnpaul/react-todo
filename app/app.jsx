let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo("Finish this tutorial"));
store.dispatch(actions.setSearchText("this"));
store.dispatch(actions.toggleShowComplete());

//load foundation
$(document).foundation();

// load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  </div>,
  document.getElementById('app')
);
