import axios from "axios";
import signupCalls from "@/js/api/login_signup.api";
export default {
  async loginUser(_, payload) {
    return await signupCalls.loginUser(payload);
  },
  logoutUser() {
    localStorage.removeItem("jwtToken");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.clear();
  },
};
