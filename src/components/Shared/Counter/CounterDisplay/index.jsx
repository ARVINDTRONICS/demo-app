import React from "react";

export const CounterDisplay = ({ currentCount,title }) => {
  console.log("Counter Display rerendered");
  return (
    <div>
      <div>{title}</div>
      <div>{currentCount}</div>
    </div>
  );
};
