import { createStore } from "vuex";
import LoginSignup from "./modules/LoginSignup/index";
import AppData from "./modules/AppData/index";
import UserData from "./modules/UserData/index";

export default createStore({
  modules: {
    login: LoginSignup,
    appData: AppData,
    userData: UserData,
  },
});