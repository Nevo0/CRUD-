import React, { Component } from "react";
import Post from "./Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-center">
          <h1 className="p-3 mb-2 bg-success text-white">start</h1>
        </div>
        <Post />
      </div>
    );
  }
}

export default App;
