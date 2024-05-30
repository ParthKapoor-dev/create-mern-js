import { serverUrl } from "@/currentMode";
import axios from "axios";

export default async function signupAction(name, email, password , dispatch) {
  const url = serverUrl + '/auth/signup';
  const data = { name, email, password }

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = response.data;
    if (json.success) {
      dispatch({ type: "Login", payload: json.data });
      console.log("success");
      return { success : true , json };
    } else {
      throw new Error(json.message);
    }
  } catch (error) {
    console.log(error.message);
    return { success: false , message : error.message}
  }

}