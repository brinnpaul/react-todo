let expect = require('expect');
let df = require('deep-freeze-strict')
let uuid = require('node-uuid');
let moment = require('moment');
let reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'searching bruv'
      };
      let res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText)
    });
  });

  describe('toggleShowCompleted Reducer', () => {
    it('should toggle show completed flag', () => {
      let action = {
        type: 'TOGGLE_SHOW'
      }
      let res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the Dog'
      };
      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle completed status of a todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      let todo = [ { id: 123,
            text: "Testing Bruh",
            completed: true,
            createdAt: 123,
            completedAt: 132 } ]
      let res = reducers.todosReducer(df(todo),df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});