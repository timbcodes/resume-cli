import appDataActions from "./actions";
import appDataMutations from "./mutations";
import appDataGetters from "./getters";
export default {
  state() {
    return {
      appData: {
        currentPage: "Dashboard",
        creditData: 0,
      }
    };
  },
  actions: appDataActions,
  mutations: appDataMutations,
  getters: appDataGetters,
};
