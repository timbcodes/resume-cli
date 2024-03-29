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
        lookingFor: "",
        careerYears: "",
        industry: "",
        howManyJobs: "",
        briefSummary: "",
      },
      buildJobHistory: {
        jobNumber: 1,
        jobs: [],
        links: null,
        skills: null,
        education: null,
      },
      returnedUser: null,
      returnedResume: null,
      generatedResume: null,
      gereatedCoverLetter: null,
    };
  },
  actions: userDataActions,
  getters: userDataGetters,
  mutations: userDataMutations,
};
