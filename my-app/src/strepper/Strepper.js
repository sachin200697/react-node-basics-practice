import React, { useEffect, useRef, useState } from "react";
import "./streeper.css";

const STREPPER_STEPS = [
  {
    name: "Customer Info",
    component: <div>Provide contact details</div>,
  },
  {
    name: "Shipping Info",
    component: <div>Provide shipping details</div>,
  },
  {
    name: "Payment",
    component: <div>Complete payment for your Order</div>,
  },
  {
    name: "Delivered",
    component: <div>Order has been dispatched</div>,
  },
];

function Strepper() {
  const [stepNo, setStepNo] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef([]);
  const [margins, setMargins] = useState({ marginLeft: 0, marginRight: 0 });
  const onStepProgress = () => {
    if (stepNo + 1 === STREPPER_STEPS.length) {
      setIsCompleted(true);
    }
    setStepNo(stepNo + 1);
  };
  useEffect(() => {
    setMargins({
      marginLeft: ref.current[0].offsetWidth,
      marginRight: ref.current[STREPPER_STEPS.length - 1].offsetWidth,
    });
  }, [ref]);  
  return (
    <React.Fragment>
      <div className="parent">
        <div className="step-container">
          {STREPPER_STEPS.map((step, index) => {
            return (
              <div
                className="step"
                ref={(element) => (ref.current[index] = element)}
                key={index}
              >
                <div className={`step__number`}>
                  {step > index ? <span>✔</span> : index + 1}
                </div>
                <div className="step__name">{step.name}</div>
              </div>
            );
          })}
        </div>
        <div
          className="progress"
          style={{
            width: `calc(100% - ${margins.marginLeft+margins.marginRight}px)`,
            marginLeft: margins.marginLeft, marginRight: margins.marginRight 
          }}
        >
          <div
            className="progress__line"
            style={{ width: `${(stepNo / STREPPER_STEPS.length) * 100}%`}}
          ></div>
        </div>
      </div>
      <div>
        {stepNo < STREPPER_STEPS.length ? (
          STREPPER_STEPS[stepNo].component
        ) : (
          <div>Order has been delivered</div>
        )}
        <button onClick={onStepProgress} disabled={isCompleted}>
          {isCompleted ? "Completed" : "Next"}
        </button>
      </div>
    </React.Fragment>
  );
}

export default Strepper;
