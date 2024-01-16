import userDataMutations from "./mutations";
export default {
  state() {
    return {
      userData: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      },
    };
  },
  mutations: userDataMutations,
};
