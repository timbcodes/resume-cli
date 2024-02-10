import { createStore } from "vuex";
import Login from "./modules/Login/index";
import UserData from "./modules/UserData/index";

export default createStore({
  modules: {
    login: Login,
    userData: UserData,
  },
});
