import { actionTypes } from '../actionTypes';

const { TODO_APP } = actionTypes;

function initialState() {
  return {
    todos: [],
    todo: '',
    todos_done: []
   };
};

function whenChageCode(state, todo, action) {
  console.log(action);
  return { ...state, todo };
}

function whenTodoApp(state, message, action) {
  const nextId = Math.random();
  const todos = state.todos;

  todos.push({id: nextId, message, completed: false});

  console.log(action);
  console.log(todos);

  return { ...state, todos, todo: ''};
}

function whenRemoveTodo(state, id, action) {
  console.log(action);
  console.log(state);
  const todos = state.todos.filter(todo => todo.id !== id);

  return { ...state, todos }
}

function whenChangeStatus(state, action) {
  console.log(action);

  for (var i = 0; i < state.todos.length; i++) {
    if (i === action.index) {
      state.todos[i].completed = !state.todos[i].completed;
    }
  }

  const todos = state.todos;

  return { ...state, todos }
}


export default function todoApp(state = initialState(), event) {
  switch (event.type) {
  case TODO_APP.CHANGE_CODE:
    return whenChageCode(state, event.newValue, event.type);
  case TODO_APP.ADD_TODO:
    return whenTodoApp(state, event.message, event.type);
  case TODO_APP.REMOVE_TODO:
    return whenRemoveTodo(state, event.id, event.type);
  case TODO_APP.CHANGE_STATUS:
    return whenChangeStatus(state, event)
  default:
    return state;
  }
}
