import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignupPage from "./Pages/AuthPages/SignupPage";
import LandingPage from "./Pages/LandingPage";
import { useSelector } from "react-redux";

export default function Router() {
  return (
    <Routes>
      <Route path={"/"} element={App(<LandingPage />)} />

      <Route path={"/auth/login"} element={Auth(<LoginPage />)} />
      <Route path={"/auth/signup"} element={Auth(<SignupPage />)} />
    </Routes>
  );
}

function Auth(element) {
  const user = useSelector(state => state.auth.user);
  return !user ? element : <Navigate to={"/"} />;
}

function App(element) {
  const user = useSelector(state => state.auth.user);
  return user ? element : <Navigate to={"/auth/login"} />;
}
