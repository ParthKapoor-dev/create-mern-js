import { useReducer } from "react";
import { handleReducerHook, userContext } from "@/context/userContext";
import { useEffect } from "react";

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(handleReducerHook, {
    user: null,
    token: null,
  });
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('User&Token'));
    if (userData) {
      dispatch({ type: "LOGIN", payload: userData });
    }
  }, []);
  return (
    <userContext.Provider value={{ ...state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}