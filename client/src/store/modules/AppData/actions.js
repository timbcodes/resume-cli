import appDataApi from "@/js/api/app_data.api";

export default {
  async hydrateCreditData({ commit }) {
    try {
      const creditData = await appDataApi.getCreditData();
      commit("setCreditData", creditData.data.remainingTokens);
    } catch (error) {
      console.error('Error hydrating credit data:', error);
      return 0;
    }
  }
};
