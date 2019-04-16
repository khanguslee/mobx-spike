import React from 'react';

import { observer, inject } from 'mobx-react';

import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        const store = this.props.todoStore;

        return(
            <div className="todoList">
                <p>Number of tasks: {store.numberOfToDosCount}</p>
                <p>Number of completed tasks: {store.completedToDosCount}</p>
                <ol>
                    {store.todos.map(todo => <ToDoItem id={todo.id} task={todo.task} completed={todo.completed}/>)}
                </ol>
            </div>
        )
    }
}

export default inject('todoStore')(observer(ToDoList));
