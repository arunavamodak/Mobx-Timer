import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TimerController from "./store/TimerController";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => TimerController.changeAbcd()}>
          Change Text
        </button>

        {TimerController.abcd}
      </div>
    );
  }
}

export default App;
