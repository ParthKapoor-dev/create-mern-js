import useUserContext from "@/hooks/useUserContext";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../DarkMode";
import { useToast } from "../ui/use-toast";



export default function Navbar() {

  const { user , dispatch } = useUserContext();
  const { toast } = useToast();

  function handleLogout() {
    dispatch({ type: "Logout" });
  };

  function handleUserClick() {
    toast({
      title : "Hello " + user.name.split(" ")[0] + " ! How are you doing ?"
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
        <div className="flex gap-8">
          <ThemeSwitch />

          <Link to="/" onClick={handleUserClick}>
            {user.name.split(' ')[0]}
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