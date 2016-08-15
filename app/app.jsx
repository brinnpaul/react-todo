let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();

// load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boiler Plate</p>,
  document.getElementById('app')
);
