import React from 'react';

import { inject, observer } from 'mobx-react';

class AddToDo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: '',
        }
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    }

    add = () => {
        if (this.state.inputValue !== "") {
            this.props.todoStore.add(this.state.inputValue);
            this.setState({
                inputValue: '',
            })
        }
    }

    render() {
        return(
            <div>
                <input  type="text" 
                        placeholder="Input task to do"
                        value={this.state.inputValue}
                        onChange={e => this.updateInputValue(e)}/>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default inject('todoStore')(observer(AddToDo));