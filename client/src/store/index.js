import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'
import LoginSignup from "./modules/LoginSignup/index";
import AppData from "./modules/AppData/index";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    login: LoginSignup,
    appData: AppData,
  },
  plugins: [vuexLocal.plugin],
});