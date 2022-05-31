import React from 'react';
import './Task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.onRemove = this.onRemove.bind(this);
    }

    onRemove() {
        this.props.removeTask(this.props.index)
    }

    render() {
        return (
            <div className='Tasks'>
                <p className='task'>
                    {this.props.displayedTask}
                </p>
                <div>
                    <button className='removeTask' onClick={this.onRemove}>DEL</button>
                    <button className='completeTask'>COM</button>
                </div>
            </div>
        )
    }
}

export default Task;