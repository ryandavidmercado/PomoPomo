import React from "react";
import { minutesToDuration } from "../utils/duration/";

function TimeControl({ changeHandler, label, time, type, disabled }) {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid={`duration-${type}`}>
        {label}: {minutesToDuration(time)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={`decrease-${type}`}
          disabled={disabled}
          onClick={() => changeHandler("decrease", type)}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={`increase-${type}`}
          disabled={disabled}
          onClick={() => changeHandler("increase", type)}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default TimeControl;
