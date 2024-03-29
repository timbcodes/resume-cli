import userDataApi from '@/js/api/user_data.api';

export default {
  async hydrateUserData({ commit }) {
    try {
      const response = await userDataApi.getUserData();
      commit('setUserData', response.data[0]);
      return response;
    } catch (error) {
      console.error('Error hydrating user data:', error);
    }
  },
  async hydrateLoginData({ commit }) {
    try {
      const response = await userDataApi.getLoginData();
      commit('setLoginData', response.data[0]);
      return response;
    } catch (error) {
      console.error('Error hydrating login data:', error);
    }
  },
  async setUserDetails({ commit }, userData) {
    try {
      const response = await userDataApi.submitUserDetails(userData);
      commit('updateUserData', response.data);
      return response;
    } catch (error) {
      console.error('Error setting user details:', error);
    }
  },
  async setAdditionalInfo({ commit }, userData) {
    try {
      const response = await userDataApi.submitAdditionalInfo(userData);
      commit('updateUserData', response.data);
      return response;
    } catch (error) {
      console.error('Error setting additional info:', error);
    }
  },
  async setSummaryInfo({ commit }, userData) {
    try {
      const response = await userDataApi.submitSummaryInfo(userData);
      commit('updateUserData', response.data);
      return response;
    } catch (error) {
      console.error('Error setting summary:', error);
    }
  },
  async setEducationInfo({ commit }, userData) {
    try {
      const response = await userDataApi.submitEducationInfo(userData);
      commit('updateUserData', response.data);
      return response;
    } catch (error) {
      console.error('Error setting education info:', error);
    }
  },
  async editUserInfo({ commit }, userData) {
    try {
      const response = await userDataApi.editUserInfo(userData);
      commit('updateUserData', response.data);
      return response;
    } catch (error) {
      console.error('Error editing user info:', error);
    }
  },
  async changePersonalInfo() {
    try {
      await userDataApi.changePersonalInfo();
    } catch (error) {
      console.error('Error changing personal info:', error);
    }
  },
  async changeAdditionalInfo() {
    try {
      await userDataApi.changeAdditionalInfo();
    } catch (error) {
      console.error('Error changing additional info:', error);
    }
  },
  async changeSummary() {
    try {
      await userDataApi.changeSummary();
    } catch (error) {
      console.error('Error changing summary:', error);
    }
  },
  async changeEducation() {
    try {
      await userDataApi.changeEducation();
    } catch (error) {
      console.error('Error changing education:', error);
    }
  },
};
