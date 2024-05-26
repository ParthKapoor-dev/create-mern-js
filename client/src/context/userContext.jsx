import { createContext } from "react";

export const userContext = createContext();

export function handleReducerHook(prevState, action) {
  switch (action.type) {
    case "LOGIN": {
      console.log(action.payload);
      console.log(login);
      const data = action.payload
      localStorage.setItem("User&Token" , JSON.stringify(data))
      return { ...data };
    }

    case "LOGOUT": {
      console.log('logout');
      return { user: null, token: null };
    }
      
    default:
      return prevState;
  }
}
