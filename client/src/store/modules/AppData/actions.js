import appDataApi from "@/js/api/app_data.api";

export default {
  async hydrateCreditData({ commit }) {
    const creditData = await appDataApi.getCreditData();
    commit("setCreditData", creditData.data.remainingTokens);
  }
};