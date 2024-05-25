import { createContext, useEffect, useReducer } from "react";

export const userContext = createContext();

export function handleReducerHook(prevState, action) {
  switch (action.type) {
    case "LOGIN":
      console.log("login");
      return { ...action.payload };

    case "LOGOUT":
      console.log('logout');
      return { user: null, token: null };

    default:
      return prevState;
  }
}
