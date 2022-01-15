import { useState } from "react";
import Count from "./Count";

function Block() {
  const [state, setCounters] = useState({
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0,
  });

  function incrementRed() {
    setCounters({ ...state, red: state.red + 1 });
  }

  function incrementYellow() {
    setCounters({ ...state, yellow: state.yellow + 1 });
  }

  function incrementGreen() {
    setCounters({ ...state, green: state.green + 1 });
  }

  function incrementBlue() {
    setCounters({ ...state, blue: state.blue + 1 });
  }

  return (
    <div>
      <Count background="btn-red" onCount={incrementRed} />
      <Count background="btn-yellow" onCount={incrementYellow} />
      <Count background="btn-green" onCount={incrementGreen} />
      <Count background="btn-blue" onCount={incrementBlue} />

      <div>Red: {state.red}</div>
      <div>Yellow: {state.yellow}</div>
      <div>Green: {state.green}</div>
      <div>Blue: {state.blue}</div>
    </div>
  );
}

export default Block;
