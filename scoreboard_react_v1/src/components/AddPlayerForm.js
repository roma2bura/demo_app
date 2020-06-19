import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: "",
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value }); // target property value to upd state
  };

  handleSubmit = (e) => {
    e.preventDefault(); // submit behaviour
    this.props.addPlayer(this.state.value); // calling and passing via func
    this.setState({ value: "" }); // to clear the value in field
  };

  render() {
    return (
      // will exeucte handleSubmit after you click button
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />

        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
