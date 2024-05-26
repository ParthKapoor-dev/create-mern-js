import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Header/navbar";
import useUserContext from "./hooks/useUserContext";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignupPage from "./Pages/AuthPages/SignupPage";

export default function App() {

  const { user } = useUserContext();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <LandingPage /> : <Navigate to="/auth/login" />} />

        <Route path="/auth/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/auth/signup" element={!user ? <SignupPage /> : <Navigate to={"/"} />} />

      </Routes>
    </div>
  )
}

