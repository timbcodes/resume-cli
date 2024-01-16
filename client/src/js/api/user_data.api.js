import axiosUtils from "@/js/utils/axios_calls.utils";

export default {
  async submitUserDetails(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "update_user_info",
      "post",
      true,
      payload
    );
    return response;
  },
};
