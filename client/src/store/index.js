import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'
import LoginSignup from "./modules/LoginSignup/index";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    login: LoginSignup,
  },
  plugins: [vuexLocal.plugin],
});