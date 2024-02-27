import userDataApi from '@/js/api/user_data.api'

export default {
  async hydrateUserData({ commit, state }) {
    const response = await userDataApi.getUserData();
    commit('setUserData', response.data[0]);
    return response
  },
  async hydrateLoginData({ commit, state }) {
    const response = await userDataApi.getLoginData();
    commit('setLoginData', response.data[0]);
    return response
  },
  async setUserDetails({ commit }, userData) {
    const response = await userDataApi.submitUserDetails(userData)
    commit('updateUserData', response.data);
    return response
  },
};