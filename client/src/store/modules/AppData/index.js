import appDataActions from "./actions";
import appDataMutations from "./mutations";
import appDataGetters from "./getters";
export default {
  state() {
    return {
      appData: {
        currentPage: "dashboard",
      }
    };
  },
  actions: appDataActions,
  mutations: appDataMutations,
  getters: appDataGetters,
};
