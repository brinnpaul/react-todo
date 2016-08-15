let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

//load foundation
$(document).foundation();

// load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <TodoApp/>
  </div>,
  document.getElementById('app')
);
