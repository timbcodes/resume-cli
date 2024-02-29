import axiosUtils from "@/js/utils/axios_calls.utils";

export default {
  async getUserData() {
    const response = await axiosUtils.axiosCall(
      "users",
      "get_user_info",
      "get",
      true
    );
    return response;
  },
  async getLoginData() {
    const response = await axiosUtils.axiosCall(
      "users",
      "get_login_data",
      "get",
      true
    );
    return response;
  },
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
  async submitAdditionalInfo(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_additional_info",
      "post",
      true,
      payload
    );
    return response;
  },
  async submitSummaryInfo(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_summary_info",
      "post",
      true,
      payload
    );
    return response;
  },
  async submitEducationInfo(payload) {
    const response = await axiosUtils.axiosCall(
      "users",
      "set_education_info",
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
    async changePersonalInfo() {
      const response = await axiosUtils.axiosCall(
        "users",
        "set_personal",
        "get",
        true
        );
        return response;
      },
      async changeAdditionalInfo() {
        const response = await axiosUtils.axiosCall(
          "users",
          "set_additional",
          "get",
          true
          );
          return response;
        },
        async changeSummary() {
          const response = await axiosUtils.axiosCall(
            "users",
            "set_summary",
            "get",
            true
            );
            return response;
          },
          async changeEducation(payload) {
            const response = await axiosUtils.axiosCall(
              "users",
              "set_education",
              "get",
              true,
              payload
            );
            return response;
          },
        };
