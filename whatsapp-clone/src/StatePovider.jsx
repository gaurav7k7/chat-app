import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types"; // Import PropTypes if you want to validate props

// Create the context
export const StateContext = createContext();

// StateProvider component to provide the state to children components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// PropTypes validation (optional)
StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

// Hook to access the context
export const useStateValue = () => useContext(StateContext);
