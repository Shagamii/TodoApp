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
    const { todo } = this.props.todoApp;

    event.preventDefault();
    if (todo.length !== 0) {
      this.props.onAddTodo(todo);
    }
  }

  onChangeCode = event =>
  this.props.onChangeCode(event.target.value);

  render() {
    const { todo, todos, todos_done } = this.props.todoApp;
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
            <div className={'tab un_completed'}>
              <h2>UnCompleted</h2>
            {
              todos && todos.length !== 0 ?
              (
                todos.map(todo =>{
                  return (
                    <div
                      key={todo.id}
                      >
                        { todo.message }
                        <button
                          type='button'
                          onClick={() => this.props.removeTodo(todo.id)}
                          >
                            削除
                          </button>
                          <button
                            type='button'
                            onClick={() => this.props.changeStatus(todo.id)}
                            >
                              Done
                            </button>
                          </div>
                        )
                      })
                    ) :
                    false
                  }
                </div>
                <div className={`tab completed`}>
                  <h2>Completed</h2>
                {
                  todos_done && todos_done.length !== 0 ?
                  (
                    todos_done.map(todo =>{
                      return (
                        <div className={`tab completed`}>
                          <div
                            key={todo[0].id}
                            >
                              { todo[0].message }
                              <button
                                type='button'
                                onClick={() => this.props.removeTodo(todo[0].id)}
                                >
                                  削除
                                </button>
                                <button
                                  type='button'
                                  onClick={() => this.props.changeStatus(todo[0].id)}
                                  >
                                    Done
                                  </button>
                                </div>
                              </div>
                            )
                          })
                        ) :
                        false
                      }
                    </div>
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
