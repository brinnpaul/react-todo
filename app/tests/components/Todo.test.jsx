let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id onClick', () => {
    let todoData = { id: 23, text: "testing", completed: true};
    let spy = expect.createSpy();

    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todo));
    
    TestUtils.Simulate.click($el[0]);
    expect(todo.props.onToggle).toHaveBeenCalledWith(23);
  });
});