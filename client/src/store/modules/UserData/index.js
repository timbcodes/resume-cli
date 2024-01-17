import userDataActions from "./actions";
import userDataGetters from "./getters";
import userDataMutations from "./mutations";
export default {
  state() {
    return {
      userData: {
        emailAddress: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        jobTitle: "",
        titleSearch: "",
        careerYears: "",
        careerIndustry: "",
        previousJobs: "",
        briefSummary: "",
      },
    };
  },
  actions: userDataActions,
  getters: userDataGetters,
  mutations: userDataMutations,
};
