import loginAction from "@/actions/AuthActions/loginAction"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function LoginPage() {

  const [disabled, setDisabled] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const { toast } = useToast();

  async function handleLogin() {
    setDisabled(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const loginData = await loginAction(email, password, dispatch);
      if (!loginData.success) {
        throw new Error(loginData.message);
      }
      toast({
        title: "Hi 👋 " + loginData.json.data.user.name + " , Login is Successful!"
      });
      console.log(user)
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: error.message,
      });
    }
    setDisabled(false);
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign In to your Existing Account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Email">Email</Label>
                <Input id="Email" placeholder="Email" ref={emailRef} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Password">Password</Label>
                <Input id="Password" type="password" placeholder="Password" ref={passwordRef} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={handleLogin} disabled={disabled}>
            Login
          </Button>
          <Button variant="outline" className="w-full" >
            Go To SignUp
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
