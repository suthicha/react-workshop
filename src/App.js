import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = {
    username: "",
    password: "",
    result: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      result: this.state.username + '/' + this.state.password
    });
  }

  render() {
    //TODO
    return (
      <div className="App">
        <input
          name="username"
          placeholder="Please enter Username"
          maxLength="2"
          value={this.state.username}
          onChange={this.handleInput}/>
          <br />
        <input
          name="password"
          onChange={this.handleInput}/>
          <br />
        <button
          onClick={this.handleSubmit}>
            Submit
        </button>
    <div>{ this.state.result }</div>
        {/* <br />
        <label>Username: {this.state.username}</label>
        <br />
        <label>Password: {this.state.password}</label> */}

      </div>
    );
  }
}
export default App;
