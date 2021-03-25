import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function TimeDisplay({ session, elapsed, timeToCheck }) {
  const sessionString = session === "focus" ? "Focusing" : "On Break";
  const formattedTime = `${minutesToDuration(timeToCheck)} minutes`;
  const remainingTime = secondsToDuration(timeToCheck * 60 - elapsed);

  return (
    <div className="row mb-2">
      <div className="col">
        <h2 data-testid="session-title">
          {sessionString} for {formattedTime}
        </h2>
        <p className="lead" data-testid="session-sub-title">
          {remainingTime} remaining
        </p>
      </div>
    </div>
  );
}

export default TimeDisplay;
