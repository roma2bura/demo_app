import React from "react";

const Counter = (props) => {
  let index = props.index;

  return (
    <div className="counter">
      <button
        className="counter-action increment"
        onClick={() => props.changeScore(index, true, +1)}
      >
        {" "}
        ✔️{" "}
      </button>
    </div>
  );
};

export default Counter;
