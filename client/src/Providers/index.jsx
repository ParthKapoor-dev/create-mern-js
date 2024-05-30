import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContextProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <UserContextProvider >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </UserContextProvider>
      <Toaster />
    </BrowserRouter>
  )
}