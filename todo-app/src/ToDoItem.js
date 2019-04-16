import React from 'react';
import { inject } from 'mobx-react';

class ToDoItem extends React.Component {
    render() {
        return (
            <li className='todoItem'>
                {this.props.task}
            </li>
        )
    }
}

export default inject('todoStore')(ToDoItem);