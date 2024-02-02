import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

// import icons
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    i: -1,
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, i } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];
    if (i === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
      });
    } else {
      newTasks[i] = newTask;

      this.setState({
        tasks: [...newTasks],
        i: -1,
      });
    }
  };

  handleEdit = (e, i) => {
    const { tasks } = this.state;
    this.setState({
      i,
      newTask: tasks[i],
    });
  };

  handleDelete = (e, i) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={newTask}
          />
          <button type="submit">
            <FaPlus>
              Enviar
            </FaPlus>
          </button>
        </form>
        <ul className="tasks">
          {tasks.map((task, i) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, i)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, i)}
                  className="close"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
