import React from "react";

function ProgressBar({ elapsed, timeToCheck }) {
  const percentElapsed = Math.floor((elapsed / (timeToCheck * 60)) * 100);

  return (
    <div className="row mb-2 mt-4">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={percentElapsed}
            style={{ width: `${percentElapsed}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
