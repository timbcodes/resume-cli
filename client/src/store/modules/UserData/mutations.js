export default {
  setUserData(state, payload) {
    state.userData.id = payload.id;
    state.userData.email = payload.email;
  },
  setUserDetails(state, payload) {
    state.userData.emailAddress = payload.emailAddress;
    state.userData.firstName = payload.firstName;
    state.userData.lastName = payload.lastName;
    state.userData.phoneNumber = payload.phoneNumber;
    state.userData.address = payload.address;
    state.userData.city = payload.city;
    state.userData.state = payload.state;
    state.userData.postalCode = payload.postalCode;
  },
  setAdditionalDetails(state, payload) {
    state.userData.jobTitle = payload.jobTitle;
    state.userData.lookingFor = payload.lookingFor;
    state.userData.careerYears = payload.careerYears;
    state.userData.industry = payload.industry;
    state.userData.howManyJobs = payload.howManyJobs;
    state.userData.briefSummary = payload.briefSummary;
  },
  incrementJobNumber(state) {
    state.buildJobHistory.jobNumber++;
  },
  addJobDetails(state, payload) {
    state.buildJobHistory.jobs.push(payload);
  },
  addLinkDetails(state, payload) {
    state.buildJobHistory.links = payload;
    console.log(state.buildJobHistory.links);
  },
};
