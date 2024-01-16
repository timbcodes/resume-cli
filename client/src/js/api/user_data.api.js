import axiosUtils from "@/js/utils/axios_calls.utils";

export default {
  async submitUserDetails(payload) {
    const response = await axiosUtils.axiosCall(
      "user",
      "user_details",
      "post",
      true,
      payload
    );
    return response;
  },
};
