import userDataMutations from "./mutations";
export default {
  state() {
    return {
      userData: {
        id: "",
        email: "",
      },
    };
  },
  mutations: userDataMutations,
};
