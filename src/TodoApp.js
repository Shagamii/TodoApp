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

    const { todo } = this.props.todoApp;

    if (todo.length !== 0) {
      this.props.onAddTodo(todo);
    }
  }

  onChangeCode = event =>
  this.props.onChangeCode(event.target.value);

  onChangeTodo = event =>
  this.props.onChangeTodo(event.target.value, event.target.name);

  onBlurTodo = event =>
  this.props.onBlurTodo(event.target.value, event.target.name);

  render() {
    const { todo, todos, newMessage } = this.props.todoApp;
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
              todos && todos.length !== 0 ?
              (
                todos.map((todo, index) =>{
                  return (
                    <div
                      style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                      }}
                      key={todo.id}
                      >
                      {
                        todo.changingTodo ?
                        <span>
                          <form
                            style={{
                              display: 'inline-block'
                            }}>
                            <input
                              type='text'
                              onChange={ this.onChangeTodo }
                              onBlur={ this.onBlurTodo }
                              name={index}
                              value={ newMessage } />
                          </form>
                        </span>
                        :
                        <span
                          onClick={() => this.props.onClickTodo(todo.id, todo.message, index)}>
                          { todo.message }
                        </span>
                      }

                      <button
                        type='button'
                        onClick={() => this.props.removeTodo(todo.id)}
                        >
                        削除
                      </button>
                      <button
                        type='button'
                        onClick={() => this.props.changeStatus(todo.id, index)}
                        >
                        {
                          todo.completed ?
                          'Yet' :
                          'Done'
                        }
                      </button>
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
