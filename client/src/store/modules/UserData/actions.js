import userDataApi from '@/js/api/user_data.api'

export default {
  async hydrateUserData({ commit }) {
    const response = await userDataApi.getUserData();
    commit('setUserData', response.data[0]);
    return response;
  },
  async hydrateLoginData({ commit }) {
    const response = await userDataApi.getLoginData();
    commit('setLoginData', response.data[0]);
    return response;
  },
  async setUserDetails({ commit }, userData) {
    const response = await userDataApi.submitUserDetails(userData)
    commit('updateUserData', response.data);
    return response;
  },
  async setAdditionalInfo({ commit }, userData) {
    const response = await userDataApi.submitAdditionalInfo(userData)
    commit('updateUserData', response.data);
    return response;
  },
  async changePersonalInfo() {
    await userDataApi.changePersonalInfo();
  },
  async changeAdditionalInfo() {
    await userDataApi.changeAdditionalInfo();
  },
  async changeSummary() {
    await userDataApi.changeSummary();
  },
};