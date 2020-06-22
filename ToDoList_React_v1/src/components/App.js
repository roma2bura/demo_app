import React, { Component } from "react";

import Header from "./Header"; // path as a string, .js extension not req.
import Footer from "./Footer";
import Task from "./Task"; // path as a string, .js extension not req.
import AddNewTask from "./AddNewTask";

class App extends Component {
  state = {
    tasks: [
      {
        name: "Order Food",
        score: 0,
        result: false,
        id: 1,
      },
      {
        name: "Invite Jessica",
        score: 0,
        result: false,
        id: 2,
      },
      {
        name: "Buy drinks",
        score: 0,
        result: false,
        id: 3,
      },
      {
        name: "Call Alena",
        score: 0,
        result: false,
        id: 4,
      },
    ],
  };

  // task id counter
  prevTaskId = 4;

  handleScoreChange = (index, delta, alpha) => {
    this.setState((prevState) => ({
      result: (prevState.tasks[index].result = delta),
      score: (prevState.tasks[index].score = alpha),
    }));
  };

  handleAddTask = (name) => {
    this.setState({
      tasks: [
        ...this.state.tasks, // spread operator to clone existing tasks
        {
          name: name,
          score: 0,
          id: (this.prevTaskId += 1),
          result: false,
        },
      ],
    });
  };

  handleRemoveTask = (id) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="To do list $$$" tasks={this.state.tasks} />

        {/* Tasks list */}
        {this.state.tasks.map((task, index) => (
          <Task
            name={task.name}
            score={task.score}
            result={task.result}
            id={task.id}
            key={task.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removeTask={this.handleRemoveTask}
          />
        ))}
        <AddNewTask addTask={this.handleAddTask} />
        <Footer />
      </div>
    );
  }
}

export default App;
