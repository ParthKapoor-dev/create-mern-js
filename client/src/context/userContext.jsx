import { createContext } from "react";

export const userContext = createContext();

export function handleReducerHook(prevState, action) {
  switch (action.type) {
    case "Login": {
      console.log(action.payload);
      const data = action.payload
      localStorage.setItem('User&Token' , JSON.stringify(data))
      return { ...data };
    }

    case "Logout": {
      console.log('logout');
      localStorage.removeItem('User&Token');
      return { user: null, token: null };
    }
      
    default:
      return prevState;
  }
}
