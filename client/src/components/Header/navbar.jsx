import useUserContext from "@/hooks/useUserContext";
import { Link } from "react-router-dom";

export default function Navbar() {

  const { user } = useUserContext();

  return (
    <div className="flex h-[8vh] items-center justify-between text-lg px-16 ">
      <Link to="/">
        Home
      </Link>

      <div>
        Create MERN JS App
      </div>


      {user ? (
        <div>
          <Link to="/">
            {user.name}
          </Link>

          <div>
            Logout
          </div>
        </div>
      ) : (
          <div className="flex gap-8">
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