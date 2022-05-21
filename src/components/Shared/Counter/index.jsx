import React from "react";
import "./counter.css";
import { CounterDisplay } from "./CounterDisplay";
import { CounterControls } from "./CounterControls";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState("");
  console.log("Counter  rerendered");
  const incrementHandler = (step) => {
    setCount((count) => count + step);
    setMessage("");
  };

  const decrementHandler = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    } else {
      setMessage("value cannot be negative");
    }
  };

  return (
    <div className="counter-wrap">
      <CounterDisplay title={"Counter Display"} currentCount={count} />
      <CounterControls
        title={"5 incrementer"}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        stepper={5}
      />
      <CounterControls
        title={"10 incrementer"}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        stepper={10}
      />

      {message ? message : ""}
    </div>
  );
};
