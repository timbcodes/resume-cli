export default {
  getUserDetails(state) {
    return state.userData;
  },
  getPreviousJobs(state) {
    return state.userData.previousJobs;
  },
  getJobNumber(state) {
    return state.buildJobHistory.jobNumber;
  },
  getJobHistory(state) {
    return state.buildJobHistory.jobs;
  },
  anyMoreJobs(state) {
    if (state.buildJobHistory.jobNumber <= state.userData.howManyJobs) {
      return true;
    }
    return false;
  },
};
