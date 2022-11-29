import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Message text = 'Hello World'/>
      </div>
    );
  }
}
export default App;
