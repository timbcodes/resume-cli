import { createStore } from "vuex";
import Login from "./modules/Login/index";

export default createStore({
  modules: {
    login: Login,
  },
});
