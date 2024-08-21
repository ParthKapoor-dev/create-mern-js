import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./ThemeProvider";
import ReduxProvider from "./ReduxProvider";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </ReduxProvider>
      <Toaster />
    </BrowserRouter>
  )
}