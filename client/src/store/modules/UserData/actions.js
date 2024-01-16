import userDataCalls from "@/js/api/user_data.api";

export default {
  async submitUserDetails({ getters }) {
    const data = getters.getUserDetails;
    const response = await userDataCalls.submitUserDetails(data);
    return response;
  },
  async sumbitAdditionalInfo({ getters }) {
    const data = getters.getUserDetails;
    const response = await userDataCalls.sumbitAdditionalInfo(data);
    return response;
  },
};
