import userDataActions from "./actions";
export default {
  state() {
    return {
      userData: {
        id: "",
        email: "",
      },
    };
  },
  actions: userDataActions,
};
