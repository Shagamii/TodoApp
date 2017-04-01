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
  console.log(todo);
  return { ...state, todo };
}

function whenTodoApp(state, message, action) {
  const nextId = Math.random();
  const todos = state.todos;

  todos.push({id: nextId, message});

  console.log(action);
  console.log(message);
  console.log(todos);

  return { ...state, todos, todo: '' };
}

function whenRemoveTodo(state, id, action) {
  console.log(action);
  const todos = state.todos.filter(todo => todo.id !== id);

  return { ...state, todos }
}

function whenChangeStatus(state, id, action) {
  console.log(action);

  const todo_done = state.todos.filter(todo => todo.id === id);
  state.todos_done.push(todo_done);
  const todos_done = state.todos_done;
  console.log(state.todos_done);

  const todos = state.todos.filter(todo => todo.id !== id);
  return { ...state, todos, todos_done }

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
    return whenChangeStatus(state, event.id, event.type);
  default:
    return state;
  }
}
