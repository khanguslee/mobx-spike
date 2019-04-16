import React from 'react';

import { observer, inject } from 'mobx-react';

import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        const store = this.props.todoStore;

        return(
            <div className="todoList">
                <p>Number of tasks: {store.numberOfToDosCount}</p>
                <ol>
                    {store.todos.map(todo => <ToDoItem task={todo.task} />)}
                </ol>
            </div>
        )
    }
}

export default inject('todoStore')(observer(ToDoList));
