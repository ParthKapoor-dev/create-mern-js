import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContextProvider";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <UserContextProvider >
        {children}
      </UserContextProvider>
      <Toaster />
    </BrowserRouter>
  )
}