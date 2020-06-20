// ВСЕ ПРАВА ЗАЩИЩЕНЫ СЦУКО
import React from "react";

const Stats = (props) => {
  const totalTasks = props.tasks.length;

  // Reduce method
  const totalPoints = props.tasks.reduce((total, task) => {
    return total + task.score;
  }, 0);

  const totalLeft = totalTasks - totalPoints;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>
            <b>Total Tasks:</b>
          </td>
          <td>
            <b>{totalTasks}</b>
          </td>
        </tr>
        <tr>
          <td>Completed:</td>
          <td> {totalPoints} </td>
        </tr>
        <tr>
          <td>Left to do:</td>
          <td> {totalLeft} </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
