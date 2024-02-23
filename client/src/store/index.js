import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'
import LoginSignup from "./modules/LoginSignup/index";
import AppData from "./modules/AppData/index";
import UserData from "./modules/UserData/index";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    login: LoginSignup,
    appData: AppData,
    userData: UserData,
  },
  plugins: [vuexLocal.plugin],
});