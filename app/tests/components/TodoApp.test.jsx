let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add a todo item to the todos state on handleAddTodo', () => {
    let todoText = "testing";
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe("testing");
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called', () => {
    let todoData = { id: 23,
                     text: "testing",
                     completed: false,
                     createdAt: 0,
                     completedAt: undefined};
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(todoData.id);

    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  });

  it('should remove completedAt data when toggled', () => {
    let todoData = { id: 23,
                     text: "testing",
                     completed: true,
                     createdAt: 0,
                     completedAt: 12341234};
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    todoApp.handleToggle(todoData.id);

    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });
});