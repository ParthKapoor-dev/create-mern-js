import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import useUserContext from "./hooks/useUserContext";
import LoginPage from "./Pages/LoginPage";
import LandingPage from "./Pages/LandingPage";

export default function App() {

  const { user } = useUserContext();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={!user ? <LoginPage /> : <LandingPage />} />

        
        <Route path="/auth/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />

      </Routes>
    </div>
  )
}