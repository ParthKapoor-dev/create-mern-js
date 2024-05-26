import { serverUrl } from "@/currentMode";
import useUserContext from "@/hooks/useUserContext";
import axios from "axios";

export default async function signupAction(name, email, password) {
  // const { dispatch } = useUserContext();
  const url = serverUrl + '/auth/signup';
  const data = { name, email, password }

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response);
    // dispatch({ type: "Login", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error
  }

}