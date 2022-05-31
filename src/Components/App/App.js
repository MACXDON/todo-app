import React from 'react';
import './App.css';
import InputTask from '../InputTask/InputTask';
import DisplayTask from '../DisplayTask/DisplayTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'clean house',
        'cook',
        'water plants'
      ]
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.state.tasks.push(task);
    let tasks = this.state.tasks;

    this.setState({
      tasks: tasks
    })
  }

  removeTask(indexFromTask) {
    let newTasks = []
    for(let i = 0; i < this.state.tasks.length; i++) {
      if(i === indexFromTask) continue;

      newTasks.push(this.state.tasks[i]);
    }
    
    this.setState({ tasks: newTasks })
  }


  render() {
    return (
      <div className="App">
        <div className='taskInput'>
          <InputTask 
            addTask={this.addTask}
          />
        </div>
        <div className='taskDisplay'>
          <DisplayTask
            tasks={this.state.tasks}
            removeTask={this.removeTask}
          />
        </div>
      </div>
    )
  }
}

export default App;
