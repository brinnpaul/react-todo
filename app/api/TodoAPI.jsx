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
 },
 filterTodos: function(todos, showCompleted, searchText) {
   let filteredTodos = todos;
   // filter by showCompleted
   filteredTodos = filteredTodos.filter((todo) => {
     return !todo.completed || showCompleted;
   })
   // filter by searchText
   filteredTodos = filteredTodos.filter((todo) => {
     let text = todo.text.toLowerCase();
     return searchText.length === 0 || text.indexOf(searchText) > -1;
   });

   // Sort todoes with non-completed first
   filteredTodos.sort((prev, next) => {
     if (!prev.completed && next.completed) return -1;
     if (prev.completed && !next.completed) return 1;
     else return 0;
   })

   return filteredTodos;
 }
};