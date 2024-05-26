import { serverUrl } from "@/currentMode";
import useUserContext from "@/hooks/useUserContext";
import axios from "axios";


export default async function loginAction( email , password) {
  const { dispatch } = useUserContext();
  const url = serverUrl + '/auth/login';
  const data = { email, password }

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response);
    dispatch({ type: "Login", payload: response.data });
    return response.data
  } catch (error) {
    console.log(error.response);
    return error.response
  }

}