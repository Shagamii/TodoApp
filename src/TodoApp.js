import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoAppAction from './Actions/TodoAppAction';

import './App.css';

class TodoApp extends Component {
  static propTypes = {
    todoApp: PropTypes.object.isRequired
  }

  addTodo = event =>{
    event.preventDefault();

    { todo } = this.props.todoApp;
    if (todo) {
    this.props.onAddTodo(todo);
    }
  }

  onChangeCode = event =>
  this.props.onChangeCode(event.target.value);

  render() {
    const { todo, todos } = this.props.todoApp;
    return (
      <div className="App">
        <div className="container">
          <h1>TodoApp with Redux</h1>
        <form>
          <div className="form">

            <input
              type='text'
              onChange={ this.onChangeCode }
              value={ todo }
              name='hoge'
            />
          </div>
          <button
            type='submit'
            className={`submitButton`}
            onClick={ this.addTodo }
            >
              追加
            </button>
          </form>
          <div className={`todoList`} >
            {
              todo && todos.length !== 0 ?
              (
                todos.map(todo =>{
                  return (
                    <div
                      key={todo.id}
                      onClick={() => this.props.removeTodo(todo.id)}
                      >
                      { todo.message }
                    </div>
                  )
                })
              ) :
              false
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoApp: state.todoApp
});

const mapDispatchToProps = dispatch =>
bindActionCreators(todoAppAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
