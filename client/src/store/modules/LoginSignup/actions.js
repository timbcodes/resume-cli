import axios from "axios";
import signupCalls from "@/js/api/login_signup.api";

export default {
  async loginUser(_, payload) {
    try {
      const res = await signupCalls.loginUser(payload);
      if (res.data.token) {
        localStorage.setItem("jwtToken", res.data.token);
        axios.defaults.headers.common["Authorization"] = res.data.token;
        return "success";
      } else {
        console.error("Token not found in response data:", res.data);
        return "error";
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  },
  logoutUser() {
    try {
      localStorage.removeItem("jwtToken");
      delete axios.defaults.headers.common["Authorization"];
      localStorage.clear();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  },
};
