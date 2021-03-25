import React from "react";

function DebugButton({ debug, clickHandler }) {
  if (!debug) return null;
  return <button onClick={clickHandler}>DEBUG</button>;
}

export default DebugButton;
