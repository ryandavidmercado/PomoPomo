import React from "react";
import TimeDisplay from "./TimeDisplay";
import ProgressBar from "./ProgressBar";

function ActiveTimer({ session, active, times, elapsed, paused }) {
  if (!active) return null;

  const timeToCheck = session === "focus" ? times[0] : times[1];
  const pausedElem = paused ? <h2>PAUSED</h2> : null;

  return (
    <div>
      <TimeDisplay
        timeToCheck={timeToCheck}
        elapsed={elapsed}
        session={session}
      />
      {pausedElem}
      <ProgressBar timeToCheck={timeToCheck} elapsed={elapsed} />
    </div>
  );
}

export default ActiveTimer;
