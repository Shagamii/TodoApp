import { actionTypes } from '../actionTypes';

const { TODO_APP } = actionTypes;

function initialState() {
  return {
    todos: [],
    todo: ''
   };
};

function whenChageCode(state, todo, action) {
  console.log(action);
  console.log(todo);
  return { ...state, todo };
}

function whenTodoApp(state, message, action) {
  const nextId = Math.random();
  const todos = state.todos;

  todos.push({id: nextId, message});

  console.log(action);
  console.log(message);

  return { ...state, todos, todo: '' };
}

function whenResetTodoForm(state, action) {
  console.log(action);

  return { ...state, todo: '' }
}

export default function todoApp(state = initialState(), event) {
  switch (event.type) {
  case TODO_APP.CHANGE_CODE:
    return whenChageCode(state, event.newValue, event.type);
  case TODO_APP.ADD_TODO:
    return whenTodoApp(state, event.message, event.type);
  case TODO_APP.RESET_TODO_FORM:
    return whenResetTodoForm(state, event.type);
  default:
    return state;
  }
}
