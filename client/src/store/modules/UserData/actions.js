import userDataCalls from "@/js/api/user_data.api";

export default {
  async submitUserDetails(_, payload) {
    const response = await userDataCalls.submitUserDetails(payload);
    return response;
  },
};
