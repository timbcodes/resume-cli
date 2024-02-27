import userDataActions from "./actions";
import userDataMutations from "./mutations";
import userDataGetters from "./getters";
export default {
  state() {
    return {
      loginData: {},
      userData: {},
    };
  },
  actions: userDataActions,
  mutations: userDataMutations,
  getters: userDataGetters,
};
