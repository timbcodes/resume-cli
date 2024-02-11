import { createStore } from "vuex";
import LoginSignup from "./modules/LoginSignup/index";

export default createStore({
  modules: {
    login: LoginSignup,
  },
});