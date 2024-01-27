import userDataCalls from "@/js/api/user_data.api";

export default {
  async submitUserDetails({ getters }) {
    const data = getters.getUserDetails;
    const response = await userDataCalls.submitUserDetails(data);
    return response;
  },
  async submitAdditionalInfo({ getters }) {
    const data = getters.getUserDetails;
    const response = await userDataCalls.sumbitAdditionalInfo(data);
    return response;
  },
  async submitJobHistory({ getters }) {
    const data = getters.getJobHistory;
    const response = await userDataCalls.submitJobHistory(data);
    return response;
  },
  async submitLinks({ getters }) {
    const data = getters.getLinks;
    const response = await userDataCalls.submitLinks(data);
    return response;
  },
  async submitSkills({ getters }) {
    const data = getters.getSkills;
    const response = await userDataCalls.submitSkills(data);
    return response;
  },
  async submitEducation({ getters }) {
    const data = getters.getEducation;
    const response = await userDataCalls.submitEducation(data);
    return response;
  },
};
