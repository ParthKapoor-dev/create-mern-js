import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/AuthPages/LoginPage";
import useUserContext from "./hooks/useUserContext";
import SignupPage from "./Pages/AuthPages/SignupPage";
import LandingPage from "./Pages/LandingPage";
import ListingPage from "./Pages/ListingPage";

export default function Router() {
  return (
    <Routes>
      <Route path={"/"} element={App(<LandingPage />)} />
      <Route path={"/company/:id"} element={App(<ListingPage />)} />

      <Route path={"/auth/login"} element={Auth(<LoginPage />)} />
      <Route path={"/auth/signup"} element={Auth(<SignupPage />)} />
    </Routes>
  );
}

function Auth(element) {
  const { user } = useUserContext();
  return !user ? element : <Navigate to={"/"} />;
}

function App(element) {
  const { user } = useUserContext();
  return user ? element : <Navigate to={"/auth/login"} />;
}
