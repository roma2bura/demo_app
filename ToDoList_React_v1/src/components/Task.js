import React from "react";

import Counter from "./Counter"; // path as a string, .js extension not req.

const Task = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removeTask(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter
        score={props.score}
        index={props.index}
        changeScore={props.changeScore}
      />
    </div>
  );
};

export default Task;
