import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoAppAction from './Actions/TodoAppAction';

import './styles/App.css';

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
  this.props.onChangeTodo(event.target.value);

  updateTodo = (newMessage, index, id) => {
    if (newMessage.length !== 0) {
      this.props.updateTodo(newMessage, index);
    } else {
      this.props.removeTodo(id);
    }
  }


  render() {
    const { todo, todos, newMessage } = this.props.todoApp;

    const labelName = completed => {
      const label_name = completed ? 'info' : 'danger';
      return label_name;
    }

    return (
      <div className="App">
        <div className="container">
          <h1>TodoApp with Redux</h1>
          <form>
            <div className="form">
              <input
                className='form-control'
                type='text'
                onChange={ this.onChangeCode }
                value={ todo }
                name='hoge'
                />
            </div>
            <button
              type='submit'
              className={`submitButton btn btn-primary`}
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
                      className='todo'
                      // style={{
                      //   textDecoration: todo.completed ? 'line-through' : 'none'
                      // }}

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
                              className='form-control'
                              type='text'
                              onChange={ this.onChangeTodo }
                              value={ newMessage } />
                          </form>
                          <button
                            type='button'
                            className='btn btn-warning'
                            onClick={() => this.updateTodo(newMessage, index, todo.id)}
                            >
                            更新
                          </button>
                        </span>
                        :
                        <span>
                          <span
                            className={`alert alert-${labelName(!todo.completed)}`}
                            onClick={() => this.props.onClickTodo(todo.id, todo.message, index)}>
                            { todo.message }
                          </span>
                          <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => this.props.removeTodo(todo.id)}
                            >
                            削除
                          </button>
                        </span>
                      }
                      <button
                        type='button'
                        className='btn btn-success'
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
