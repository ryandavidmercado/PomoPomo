import React, { useState } from "react";
import useInterval from "../utils/useInterval";

import DualTimeControl from "./DualTimeControl";
import PlayPauseStop from "./PlayPauseStop";
import ActiveTimer from "./ActiveTimer";
import DebugButton from "./DebugButton";

function Pomodoro() {
  const DEBUG = false;

  const templateState = {
    active: false,
    paused: true,
    focus: 25,
    break: 5,
    elapsed: 0,
    session: "focus",
  };
  const sessionRanges = {
    focus: [5, 60],
    break: [1, 15],
  };
  const [timerState, setTimerState] = useState(templateState);

  //state management functions
  function flipSession() {
    new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
    const newSession = timerState.session === "focus" ? "break" : "focus";

    setTimerState((timerState) => ({
      ...timerState,
      session: newSession,
      elapsed: 0,
    }));
  }

  function tickTimer() {
    setTimerState((timerState) => ({
      ...timerState,
      elapsed: timerState.elapsed + 1,
    }));
  }

  //button handler functions
  function stopHandler() {
    setTimerState((timerState) => ({
      ...templateState,
      focus: timerState.focus,
      break: timerState.break,
    }));
  }

  function playPause() {
    setTimerState((timerState) => ({
      ...timerState,
      paused: !timerState.paused,
      active: true,
    }));
  }

  function timeControlChangeHandler(direction, type) {
    const oldTime = timerState[type];
    const range = sessionRanges[type];
    const nudge = type === "focus" ? 5 : 1;

    const newTime =
      direction === "increase"
        ? Math.min(oldTime + nudge, range[1])
        : Math.max(oldTime - nudge, range[0]);

    setTimerState((timerState) => ({
      ...timerState,
      [type]: newTime,
    }));
  }

  //sets elapsed time to 5 seconds before session switch. Used only if var "DEBUG" is set to true.
  function debugHandler() {
    const timeToCheck = timerState[timerState.session];
    const fiveTil = timeToCheck * 60 - 5;
    setTimerState((timerState) => ({
      ...timerState,
      elapsed: fiveTil,
    }));
  }

  //utility functions
  function sessionIsOver() {
    return timerState.elapsed === timerState[timerState.session] * 60;
  }

  //calls appropriate state management functions every second timer is unpaused.
  useInterval(
    () => {
      if (sessionIsOver()) flipSession();
      else tickTimer();
    },
    timerState.paused ? null : 1000
  );

  return (
    <div className="pomodoro">
      <DualTimeControl
        types={["focus", "break"]}
        times={[timerState.focus, timerState.break]}
        changeHandler={timeControlChangeHandler}
        disabled={timerState.active}
      />
      <PlayPauseStop
        paused={timerState.paused}
        active={timerState.active}
        playPauseHandler={playPause}
        stopHandler={stopHandler}
      />
      <ActiveTimer
        session={timerState.session}
        active={timerState.active}
        times={[timerState.focus, timerState.break]}
        elapsed={timerState.elapsed}
        paused={timerState.paused}
      />
      <DebugButton clickHandler={debugHandler} debug={DEBUG} />
    </div>
  );
}

export default Pomodoro;
