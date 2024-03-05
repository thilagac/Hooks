import React, { useReducer } from "react";
const initialState = { count: 0 };
const Action = {
  INCREASE: "increase",
  DECREASE: "decrease",
};
const reduce = (state, action) => {
  switch (action.type) {
    case Action.INCREASE:
      return { count: state.count + 1 };
    case Action.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const UseReduce = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const increase = () => {
    dispatch({ type: Action.INCREASE });
  };
  const decrease = () => {
    dispatch({ type: Action.DECREASE });
  };

  return (
    <div>
      <h2>count : {state.count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default UseReduce;
