import { Link } from "react-router-dom";
import { ThemeSwitch } from "../DarkMode";
import { useToast } from "../ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "@/redux/slice/auth.slice";
import { Button } from "../ui/button";

export default function Navbar() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const { toast } = useToast();

  function handleLogout() {
    dispatch(AuthLogout())
  };

  function handleUserClick() {
    toast({
      title: "Hello " + user.name.split(" ")[0] + " ! How are you doing ?"
    })
  }

  return (
    <div className="flex h-[8vh] items-center justify-between text-lg px-16">

      <div className="flex gap-8 items-center">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/" className=" max-md:hidden">
          Create MERN App
        </Link>

      </div>


      {user ? (
        <div className="flex gap-8 items-center">
          <ThemeSwitch />

          <Link to="/" onClick={handleUserClick}>
            {user.name.split(' ')[0]}
          </Link>

          <Button onClick={handleLogout} className="cursor-pointer">
            Logout
          </Button>
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