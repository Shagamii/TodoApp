import { actionTypes } from '../actionTypes';

const { TODO_APP } = actionTypes;

function initialState() {
  return {
    todos: [],
    todo: '',
    newMessage: ''
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

  todos.push({id: nextId, message, completed: false, changingTodo: false});

  console.log(action);
  console.log(todos);

  return { ...state, todos, todo: ''};
}

function whenRemoveTodo(state, id, action) {
  console.log(action);

  const todos = state.todos.filter(todo => todo.id !== id);

  return { ...state, todos }
}

function whenChangeStatus(state, action) {
  console.log(action.type);

  for (var i = 0; i < state.todos.length; i++) {
    if (i === action.index) {
      state.todos[i].completed = !state.todos[i].completed;
    }
  }

  const todos = state.todos;

  return { ...state, todos }
}

function whenClickTodo(state, action) {
  console.log(action.type);

  for (var i = 0; i < state.todos.length; i++) {
    if (i === action.index) {
      state.todos[i].changingTodo = true;
    }
  }

  const newMessage = action.setMessage;
  const todos = state.todos;

  return { ...state, todos, newMessage }
}

function whenUpdateTodo(state, action) {
  console.log(action);

  for (var i = 0; i < state.todos.length; i++) {
    if (i === action.index) {
      state.todos[i].message = action.newMessage;
      state.todos[i].changingTodo = false;
    }
  }

  const todos = state.todos;

  return { ...state, todos }
}

function whenChangeTodo(state, newMessage, action) {
  console.log(action);
  console.log(newMessage);

  return { ...state, newMessage }
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
    return whenChangeStatus(state, event);
  case TODO_APP.CLICK_TODO:
    return whenClickTodo(state, event);
  case TODO_APP.UPDATE_TODO:
    return whenUpdateTodo(state, event)
  case TODO_APP.CHANGE_TODO:
    return whenChangeTodo(state, event.newMessage, event.type);
  default:
    return state;
  }
}
