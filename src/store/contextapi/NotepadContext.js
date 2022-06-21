import React, { useReducer } from "react";
import { reducer, initalState } from "../../reducer/reducer";

export const NotepadContext = React.createContext();

export const NotepadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <NotepadContext.Provider value={{ state, dispatch }}>
      {children}
    </NotepadContext.Provider>
  );
};
