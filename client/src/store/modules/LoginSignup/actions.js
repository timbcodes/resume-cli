import axios from "axios";
import signupCalls from "@/js/api/login_signup.api";
export default {
  async loginUser(_, payload) {
    const res = await signupCalls.loginUser(payload);
    console.log(res.data.token);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
      return "success";
    } else {
      return "error";
    }
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
