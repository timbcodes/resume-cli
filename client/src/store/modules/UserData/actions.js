import userDataApi from '@/js/api/user_data.api'

export default {
  async getUserData({ commit, state }) {
    const response = await userDataApi.getUserData()
    console.log(response.data[0]);
    // set user data to the storek
    commit('setUserData', response.data[0]);
    console.log('state.userData: ', state.userData);
    return response
  },
};