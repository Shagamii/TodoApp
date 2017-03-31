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
  }
}

export function resetTodoForm() {
  return {
    type: TODO_APP.RESET_TODO_FORM
   }
}
