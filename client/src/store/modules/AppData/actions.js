import appDataApi from "@/js/api/app_data.api";

export default {
  async hyrdrateCreditData({ commit }) {
    const creditData = await appDataApi.getCreditData();
    console.log(creditData.data[0].creditData);
    commit("setCreditData", creditData.data[0].creditData);
  }
};