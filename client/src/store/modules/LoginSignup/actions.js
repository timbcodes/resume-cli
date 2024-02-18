import axios from "axios";
import signupCalls from "@/js/api/login_signup.api";
export default {
  async loginUser(_, payload) {
    const res = await signupCalls.loginUser(payload);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
      return "success";
    } else {
      return "error";
    }
  },
  logoutUser() {
    localStorage.removeItem("jwtToken");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.clear();
  },
};
