import { AuthLogin } from "@/redux/slice/auth.slice";
import axios from "axios";

export default async function signupAction(name, email, password, dispatch) {
  const url = import.meta.env.VITE_URI + '/auth/signup';
  const data = { name, email, password }

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = response.data;
    if (json.success) {
      dispatch(AuthLogin(json.data));
      return { success: true, json };
    } else {
      throw new Error(json.message);
    }
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message }
  }

}