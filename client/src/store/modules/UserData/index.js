import userDataActions from "./actions";
import userDataMutations from "./mutations";
import userDataGetters from "./getters";
export default {
  state() {
    return {
      userData: {
        email: "",
      }
    };
  },
  actions: userDataActions,
  mutations: userDataMutations,
  getters: userDataGetters,
};
