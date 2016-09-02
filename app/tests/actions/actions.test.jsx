let expect = require('expect');
let actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
      let action = {
        type: "SET_SEARCH_TEXT",
        searchText: 'still searching'
      };
      let res = actions.setSearchText(action.searchText);
      expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
      let action = {
        type: "ADD_TODO",
        text: 'Finish the coding challenge'
      };
      let res = actions.addTodo(action.text);
      expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
      let action = {
        type: "TOGGLE_TODO",
        id: 1
      };
      let res = actions.toggleTodo(action.id);
      expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
      let action = {
        type: "TOGGLE_SHOW"
      };

      let res = actions.toggleShowComplete();

      expect(res).toEqual(action);
  });
});