import useUserContext from "@/hooks/useUserContext";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../DarkMode";



export default function Navbar() {

  const { user , dispatch } = useUserContext();


  function handleLogout() {
    dispatch({ type: "Logout" });
  }

  return (
    <div className="flex h-[8vh] items-center justify-between text-lg px-16 ">
      <Link to="/">
        Home
      </Link>

      <div>
        Create MERN JS App
      </div>


      {user ? (
        <div className="flex gap-8">
          <ThemeSwitch />

          <Link to="/">
            {user.name}
          </Link>

          <div onClick={handleLogout} className="cursor-pointer">
            Logout
          </div>
        </div>
      ) : (
          <div className="flex gap-8">
            <ThemeSwitch />

            <Link to="/auth/login">
              Login
            </Link>

            <Link to="/auth/signup">
              Signup
            </Link>
        </div>
      )}
    </div>
  )
}