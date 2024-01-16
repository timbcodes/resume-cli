export default {
  getUserDetails(state) {
    return state.userData;
  },
  getPreviousJobs(state) {
    return state.userData.previousJobs;
  },
};
