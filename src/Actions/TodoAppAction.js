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

export function changeStatus(id, index) {
  return {
    type: TODO_APP.CHANGE_STATUS,
    id,
    index
  };
}

export function onClickTodo(id, setMessage, index) {
  return {
    type: TODO_APP.CLICK_TODO,
    id,
    setMessage,
    index
  }
}

export function onBlurTodo(setMessage, index) {
  return {
    type: TODO_APP.BLUR_TODO,
    setMessage,
    index
  }
}

export function onChangeTodo(newMessage) {
  return {
    type: TODO_APP.CHANGE_TODO,
    newMessage
  }
}
