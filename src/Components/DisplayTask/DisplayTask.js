import React from 'react';
import './DisplayTask.css';
import Task from '../Task/Task'; 

class DisplayTask extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                {
                    this.props.tasks.map((task, index) => {
                        return (
                            <Task 
                                key={index}
                                index={index}
                                displayedTask={task}
                                removeTask={this.props.removeTask}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayTask;