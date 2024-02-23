import userDataApi from '@/js/api/user_data.api'

export default {
  async hydrateUserData({ commit, state }) {
    const response = await userDataApi.getUserData()
    commit('setUserData', response.data[0]);
    return response
  },
  async setUserDetails({ commit }, userData) {
    const response = await userDataApi.submitUserDetails(userData)
    // update user data in the store
    commit('updateUserData', response.data);
    return response
  },
};