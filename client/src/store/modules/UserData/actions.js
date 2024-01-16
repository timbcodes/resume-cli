import userDataCalls from "@/js/api/user_data.api";

export default {
  async submitUserDetails({ getters }) {
    const data = getters.getUserDetails;
    console.log(data);
    const response = await userDataCalls.submitUserDetails(data);
    return response;
  },
};
