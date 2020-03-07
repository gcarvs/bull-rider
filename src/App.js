import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateStonks } from "./actions";
import "./App.css";

class App extends Component {
  // Internal state of the component
  state = {
    inputValue: ""
  };

  // Handler function for the onChange event of the input text
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    // IDK
    const { updateStonks, stonksValue } = this.props;

    // Imports the internal state to be available in the page
    const { inputValue } = this.state;

    return (
      <div className="App">
        <input type="text" onChange={this.inputChange} value={inputValue} />
        <button onClick={() => updateStonks(inputValue)}>
          Change Stonks Value!
        </button>
        <h1>{stonksValue}</h1>
      </div>
    );
  }
}

// Maps the a part of the state store to the component's props
const mapStateToProps = store => ({
  stonksValue: store.stonksState.stonksValue
});

// Converts the action creator function 'updateStonks' in a prop
const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateStonks }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
