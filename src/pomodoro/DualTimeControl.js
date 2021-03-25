import React from "react";
import TimeControl from "./TimeControl";
import titleCaser from "../utils/title-caser";

function DualTimeControl({ types, times, changeHandler, disabled }) {
  return (
    <div className="row">
      <div className="col">
        <TimeControl
          changeHandler={changeHandler}
          label={`${titleCaser(types[0])} Duration`}
          time={times[0]}
          type={types[0]}
          disabled={disabled}
        />
      </div>
      <div className="col">
        <div className="float-right">
          <TimeControl
            changeHandler={changeHandler}
            label={`${titleCaser(types[1])} Duration`}
            time={times[1]}
            type={types[1]}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default DualTimeControl;
