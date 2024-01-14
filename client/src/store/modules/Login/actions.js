import axios from "axios";
import signupCalls from "@/js/api/login_signup.api";
export default {
  loginUser(_, payload) {
    console.log(payload);
    return signupCalls.loginUser(payload);
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
