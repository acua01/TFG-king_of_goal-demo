import React, { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useActions(state, dispatch);
  // Log new state
  useEffect(
    () => {
      console.log({ newState: state });
    },
    [state]
  );

  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
