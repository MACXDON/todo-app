import React from 'react';
import './InputTask.css';

class InputTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    addTask() {
        this.props.addTask(this.state.task);
    }

    handleChange(e) {
        let newValue = e.target.value;
        this.setState({ task: newValue })
    }

    handleClick() {
        this.addTask();
        this.setState({ task: '' })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.value} placeholder='New Task'/>
                <button onClick={this.handleClick}>
                    Add
                </button>
            </div>
        )
    }
}

export default InputTask;