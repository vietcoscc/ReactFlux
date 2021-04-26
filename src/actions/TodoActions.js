import TodoActionTypes from './../constants/TodoActionTypes';
import TodoDispatcher from './../dispatchers/TodoDispatcher';

const Actions = {
  addTodo(text) {
    console.log("addTodo");
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
};

export default Actions;
