import { actionTypes } from '../actionTypes';

const { TODO_APP } = actionTypes;

export function onChangeCode(newValue) {
  return {
    type: TODO_APP.CHANGE_CODE,
    newValue
  };
}

export function onAddTodo(message) {
  return {
    type: TODO_APP.ADD_TODO,
    message
  };
}

export function removeTodo(id) {
  return {
    type: TODO_APP.REMOVE_TODO,
    id
  };
}

export function changeStatus(id) {
  return {
    type: TODO_APP.CHANGE_STATUS,
    id
  };
}
