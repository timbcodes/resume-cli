import axiosUtils from "@/js/utils/axios_calls.utils";

export default {
  async submitUserDetails(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_user_info",
      "post",
      true,
      payload
    );
    return response;
  },
  async sumbitAdditionalInfo(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_additional_info",
      "post",
      true,
      payload
    );
    return response;
  },
};
