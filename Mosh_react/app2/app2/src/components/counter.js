import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-s"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div> //jsx expression must have one parent element in this case div
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // what always there
    classes += this.props.counter.value === 0 ? "warning" : "primary"; // if count 0 then badge-warning applies otherwise badge-primary applies.
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value; // count equals to zero then x applies otherwise count applies.
  }
}

export default Counter;
