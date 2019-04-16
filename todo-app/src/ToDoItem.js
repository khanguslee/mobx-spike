import React from 'react';
import { inject } from 'mobx-react';

class ToDoItem extends React.Component {
    checkBox = () => {
        this.props.todoStore.update(this.props.id, this.props.completed);
    }

    render() {
        return (
            <li className='todoItem'>
                <input  type='checkbox' 
                        defaultChecked={this.props.completed}
                        onClick={this.checkBox}/>
                {this.props.task}
            </li>
        )
    }
}

export default inject('todoStore')(ToDoItem);