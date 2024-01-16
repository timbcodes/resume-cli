export default {
  setUserData(state, payload) {
    state.userData.id = payload.id;
    state.userData.email = payload.email;
    console.log(state.userData);
  },
  setUserDetails(state, payload) {
    state.userData.emailAddress = payload.emailAddress;
    state.userData.firstName = payload.firstName;
    state.userData.lastName = payload.lastName;
    state.userData.phoneNumber = payload.phoneNumber;
    state.userData.address = payload.address;
    state.userData.city = payload.city;
    state.userData.state = payload.state;
    state.userData.postalCode = payload.postalCode;
  },
};
