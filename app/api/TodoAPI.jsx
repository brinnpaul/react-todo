let $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    let strTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(strTodos);
    } catch (e) {

    }
   return $.isArray(todos) ? todos : [];
  }
};