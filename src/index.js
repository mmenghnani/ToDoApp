import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList.js'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
      <h3 className = "header-title"> Welcome to your todo list!  </h3>
      <div id = "container">
      <TodoList />
      </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
