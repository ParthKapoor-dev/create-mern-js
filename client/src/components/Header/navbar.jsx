import useUserContext from "@/hooks/useUserContext";
import { Link } from "react-router-dom";

export default function Navbar() {

  const { user } = useUserContext();

  return (
    <div>
      <Link to="/">
        Home
      </Link>
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
          <div>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
        </div>
      )}
    </div>
  )
}