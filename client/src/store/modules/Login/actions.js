import axios from "axios";
import signupCalls from "@/js/api/login_signup.api";
export default {
  async loginUser(_, payload) {
    return await signupCalls.loginUser(payload);
  },
  logoutUser() {
    // remove token from local storage
    localStorage.removeItem("jwtToken");
    // remove auth header for future requests
    delete axios.defaults.headers.common["Authorization"];
    // delete all of local storage
    localStorage.clear();
  },
};
