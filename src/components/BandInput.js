import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_BAND", payload: this.state });
  };
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <input
              type="text"
              placeholder="add a band"
              onChange={(event) => this.handleChange(event)}
              value={this.state.text}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

// map dispatch to state
export default connect()(BandInput);