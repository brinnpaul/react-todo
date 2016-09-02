let React = require('react');

let AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="New Todo!"/>
          <button className="button expanded">Add a Todo!</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;