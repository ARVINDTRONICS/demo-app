import React from "react";

export const CounterControls = ({ title, incrementHandler, decrementHandler,stepper}) => {
  return (
    <div>
        <div>{title}</div>
      <button
        onClick={() => {
          incrementHandler(stepper);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrementHandler();
        }}
      >
        -
      </button>
    </div>
  );
};
