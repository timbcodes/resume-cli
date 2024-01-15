export default {
  setUserData(state, payload) {
    state.userData.id = payload.id;
    state.userData.email = payload.email;
    console.log(state.userData);
  },
};
