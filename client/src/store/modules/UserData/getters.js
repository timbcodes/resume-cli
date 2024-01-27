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
  getLinks(state) {
    return state.buildJobHistory.links;
  },
  getSkills(state) {
    return state.buildJobHistory.skills;
  },
  getEducation(state) {
    return state.buildJobHistory.education;
  },
  getReturnedUser(state) {
    return state.returnedUser;
  },
  getReturnedResume(state) {
    return state.returnedResume;
  },
  getGeneratedResume(state) {
    return state.generatedResume;
  },
  getGeneratedCoverLetter(state) {
    return state.generatedCoverLetter;
  },
};
