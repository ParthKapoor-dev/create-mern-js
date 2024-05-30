import { useRef, useState } from "react";

import signupAction from "@/actions/AuthActions/SignupAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import useUserContext from "@/hooks/useUserContext";

export default function SignupPage() {
  const { toast } = useToast();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const { dispatch } = useUserContext();

  async function handleSignup(event) {
    event.preventDefault();
    setDisabled(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    try {
      const signupData = await signupAction(name, email, password , dispatch);
      if (!signupData.success) {
        throw new Error(signupData.message);
      }
      toast({
        title : "Hi 👋 " + signupData.json.data.user.name + " , Signup is Successful!"
      })
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
          <CardTitle>Sign Up Page</CardTitle>
          <CardDescription>Register here to create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Name">Name</Label>
                <Input id="Name" placeholder="Name" ref={nameRef} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Email">Email</Label>
                <Input id="Email" placeholder="Email" ref={emailRef} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button disabled={disabled} className="w-full" onClick={handleSignup}>
            Sign Up
          </Button>
          <Button variant="outline" className="w-full" onClick={() => {
            toast({
              title: "Toast Check",
              description: "What a lovely day it is!",
            })
          }}>
            Go To Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
