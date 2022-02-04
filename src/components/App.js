import React from "react";
import { Button, Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { IncCounter, DecCounter } from "./actions/index";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment / Decement Counter</h1>
      <h3>Using React-Redux</h3>
      <button inverted color="green" onClick={() => dispatch(DecCounter(5))}>
        -
      </button>
      <input value={myState} />
      <button inverted color="green" onClick={() => dispatch(IncCounter(5))}>
        +
      </button>
    </div>
  );
}

export default App;
