import { useReducer } from "react";
import ComponentC from "./ComponentC";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const ComponentA = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <ComponentC
        count={state.count}
        onIncrement={() => dispatch({ type: "INCREMENT" })}
        onDecrement={() => dispatch({ type: "DECREMENT" })}
        onReset={() => dispatch({ type: "RESET" })}
      />
    </div>
  );
};

export default ComponentA;
