import React from "react";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const [message, setMessage] = React.useState("");

  const incrementHandler = () => {
    setCount((count) => count + 1);
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
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            incrementHandler();
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
        {message ? message : ""}
      </div>
    </div>
  );
};
