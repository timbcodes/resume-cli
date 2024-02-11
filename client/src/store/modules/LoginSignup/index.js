import userLoginActions from "./actions";
import userLoginMutations from "./mutations";
import userLoginGetters from "./getters";
export default {
  state() {
    return {
      userAuthModal: false,
      userLoginModal: false,
      userSignupModal: false,
      forgotPasswordModal: false,
    };
  },
  actions: userLoginActions,
  mutations: userLoginMutations,
  getters: userLoginGetters,
};
