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

import { useState } from "react"

export default function LoginPage() {

  const [disabled, setDisabled] = useState(false);
  const [error , setError ] = useState(null)

  async function handleLogin() {
    setDisabled(true);
    try {
      const loginData = await loginAction(email, password);
      console.log(loginData);
    } catch (error) {
      console.log(error);
    }
    setDisabled(false)
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
                <Input id="Email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Password">Password</Label>
                <Input id="Password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button  className="w-full" onClick={handleLogin}>
            Login
          </Button>
          <Button  variant="outline" className="w-full" >
            Go To SignUp
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
