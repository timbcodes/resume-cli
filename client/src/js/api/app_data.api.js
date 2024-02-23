import axiosUtils from "@/js/utils/axios_calls.utils";

export default {
  async getCreditData() {
    const response = await axiosUtils.axiosCall(
      "tokens",
      "get_remaining_tokens",
      "get",
      true
    );
    return response;
  },
};
