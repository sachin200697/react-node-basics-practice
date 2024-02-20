import React from "react";

function PasswordConstraints({ constraints, onConstraintChange }) {
  const renderConstraint = () => {
    if (constraints.length) {
      return constraints.map((con, index) => {
        return (
          <span key={index}>
            <input
              type="checkbox"
              id={con.id}
              checked={con.state}
              onChange={() => onConstraintChange(index)}
            />
            <label htmlFor={con.id}>{con.title}</label>
          </span>
        );
      });
    }
  };
  return <div className="password__constranits">{renderConstraint()}</div>;
}

export default PasswordConstraints;
