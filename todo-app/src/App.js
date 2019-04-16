import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import DevTools from 'mobx-react-devtools'

import AddToDo from './addToDo';

import ToDoList from './ToDoList';
import ToDoStore from './ToDoStore';

const todoStore = new ToDoStore();
class App extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <Provider todoStore = {todoStore}>
          <div className="App">
            <h1>TODO Application</h1>
            <AddToDo />
            <ToDoList />
          </div>
        </Provider>
        
      </div>
    );
  }
}

export default App;
