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
  async submitJobHistory(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_job_history",
      "post",
      true,
      payload
    );
    return response;
  },
  async submitLinks(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_links",
      "post",
      true,
      payload
    );
    return response;
  },
  async submitSkills(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_skills",
      "post",
      true,
      payload
    );
    return response;
  },
  async submitEducation(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_education",
      "post",
      true,
      payload
    );
    return response;
  },
};
