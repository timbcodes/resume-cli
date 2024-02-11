export default {
  setUserAuthModalState(state, payload) {
    state.userAuthModal = payload;
  },
  setUserLoginModalState(state, payload) {
    state.userLoginModal = payload;
  },
  setUserSignupModalState(state, payload) {
    state.userSignupModal = payload;
  },
  setUserForgotPasswordModalState(state, payload) {
    state.forgotPasswordModal = payload;
  },
};
