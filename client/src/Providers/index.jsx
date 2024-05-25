import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContextProvider";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <UserContextProvider >
        {children}
      </UserContextProvider>
    </BrowserRouter>
  )
}