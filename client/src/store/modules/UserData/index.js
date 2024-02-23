import userDataActions from "./actions";
import userDataMutations from "./mutations";
import userDataGetters from "./getters";
export default {
  state() {
    return {
      userData: {}
    };
  },
  actions: userDataActions,
  mutations: userDataMutations,
  getters: userDataGetters,
};
