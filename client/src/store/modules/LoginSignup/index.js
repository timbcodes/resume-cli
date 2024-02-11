import userLoginActions from "./actions";
export default {
  state() {
    return {
      loginWindow: false,
      signupWindow: false,
      forgotPasswordWindow: false,
    };
  },
  actions: userLoginActions,
};
