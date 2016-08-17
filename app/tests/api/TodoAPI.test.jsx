let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  })

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{ id: 1, text: "testing", completed: true }];
      TodoAPI.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'))
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array', () => {
      let badData = {a:"c", b:"d"};
      TodoAPI.setTodos(badData);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect([]).toEqual(actualTodos);
    });

    it('should return todos if valid array in localStorage', () => {
      let todos = [{ id: 1, text: "testing", completed: true }];
      localStorage.setItem('todos', JSON.stringify(todos));

      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });


});