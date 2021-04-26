import AppView from '../views/App';
import {Container} from 'flux/utils';
import TodoStore from '../stores/TodoStore';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);
