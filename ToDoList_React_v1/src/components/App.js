import React, { Component } from "react";

import Header from "./Header"; // path as a string, .js extension not req.
import Footer from "./Footer";
import Player from "./Player"; // path as a string, .js extension not req.
import AddNewTask from "./AddNewTask";

class App extends Component {
  state = {
    tasks: [
      {
        name: "Order Food",
        score: 0,
        id: 1,
      },
      {
        name: "Invite Jessica",
        score: 0,
        id: 2,
      },
      {
        name: "Buy drinks",
        score: 0,
        id: 3,
      },
      {
        name: "Call Alena",
        score: 0,
        id: 4,
      },
    ],
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.tasks[index].score += delta),
      name: (prevState.tasks[index].name += this.handleStrike),
    }));
  };

  handleStrike = (e) => {
    e.target.classList.toggle("strikeThrough");
  };

  handleAddTask = (name) => {
    this.setState({
      tasks: [
        ...this.state.tasks, // spread operator to clone existing tasks
        {
          name: name,
          score: 0,
          id: (this.prevPlayerId += 1),
        },
      ],
    });
  };

  handleRemovePlayer = (id) => {
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
        {this.state.tasks.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
        <AddNewTask addTask={this.handleAddTask} />
        <Footer />
      </div>
    );
  }
}

export default App;
