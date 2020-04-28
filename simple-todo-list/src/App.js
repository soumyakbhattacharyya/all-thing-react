import React from 'react';
import TodoComponent from './component/TodoComponent.js';
import tasks from './tasks.json';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    const tasks_ = tasks.elements.map((task) => {
      return <TodoComponent key={task.id}
        id={task.id}
        description={task.description}
        dueBy={task.dueBy}
        project={task.project}
        done={task.done}
        handleChange={this.handleChange} />
    });
    console.log("tasks are ", tasks_)
    this.state = { taskList: tasks_ }
  }

  handleChange(id) {
    const idForSelecteElement = id;
    this.setState((prevstate) => {
      // toggle the item
      const updatedTaskList = prevstate.taskList.map((task) => {
        if (task.key === idForSelecteElement) {
          return <TodoComponent key={task.props.id}
            id={task.props.id}
            description={task.props.description}
            dueBy={task.props.dueBy}
            project={task.props.project}
            done={!task.props.done}
            handleChange={this.handleChange} />
        }
        return task;
      });
      return { taskList: updatedTaskList }
    })
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.taskList}
      </div>
    );
  }
}

export default App;
