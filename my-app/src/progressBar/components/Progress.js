import React, { useEffect, useState } from "react";
import "../progress.css";

function Progress({ percentage = 0, maxPercentage = 100, onComplete }) {
  const [progress, setProgress] = useState(percentage);
  useEffect(() => {
    let val = Math.min(maxPercentage, Math.max(0, percentage));
    setProgress(val);
    if(val>=maxPercentage) {
        onComplete(true);
    }
  }, [percentage]);
  return (
    <div className="progress-container">
      <span
        className="progress-container__value"
        style={{ color: percentage > 49 ? "white" : "black" }}
      >
        {progress.toFixed()}
      </span>
      <div
        className="progress-container__div"
        style={{transform: `scaleX(${progress/100})`, transformOrigin:"left"}}
        // style={{ width: `${progress.toFixed()}%` }} //we can do like this as well
        role="progressbar"
        aria-valuemax={maxPercentage}
        aria-valuemin={0}
        aria-valuenow={progress}
      ></div>
    </div>
  );
}

export default Progress;
