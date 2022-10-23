import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    value: "",

    ops: [".", "+", "*", "/", "-"],
  };

  equal = () => {
    var result = eval(this.state.value.toString());
    this.setState({ value: result });
  };

  getvalue = (e) => {
    const x = this.state.value + e.target.innerText;
    const y = this.state.ops;

    if (
      y.includes(x.charAt(0)) ||
      (y.includes(x.charAt(x.length - 2)) && y.includes(x.charAt(x.length - 1)))
    )
      return;
    else this.setState({ value: x });
  };

  clear = () => {
    var x = this.state.value;

    if (typeof x !== "string") {
      this.setState({ value: "" });
    } else this.setState({ value: x.slice(0, x.length - 1) });
  };

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <h1 className="header">React Calculator</h1>
          <div className="input">{this.state.value || 0}</div>
          <div className="d-flex justify-content-between ">
            <button onClick={this.getvalue}>7</button>
            <button onClick={this.getvalue}>8</button>
            <button onClick={this.getvalue}>9</button>
            <button onClick={this.getvalue} className="operator">
              /
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={this.getvalue}>4</button>
            <button onClick={this.getvalue}>5</button>
            <button onClick={this.getvalue}>6</button>
            <button onClick={this.getvalue} className="operator">
              *
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={this.getvalue}>1</button>
            <button onClick={this.getvalue}>2</button>
            <button onClick={this.getvalue}>3</button>
            <button onClick={this.getvalue} className="operator">
              +
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={this.getvalue}>.</button>
            <button onClick={this.getvalue}>0</button>
            <button onClick={this.clear}>Del</button>
            <button onClick={this.getvalue} className="operator">
              -
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={this.equal} className="clear">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
