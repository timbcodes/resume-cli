<template>
  <div>
    <LoginForm v-if="userLogin"/>
    <SignupForm v-if="userSignup"/>
    <ForgotPassForm v-if="forgotPassword"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LoginForm from "./UI/LoginForm";
import SignupForm from "./UI/SignupForm";
import ForgotPassForm from "./UI/ForgotPassForm";
export default {
  name: "UserAuthModal",
  components: {
    LoginForm,
    SignupForm,
    ForgotPassForm
  },
  computed: {
    ...mapGetters(["getUserLoginModalState", "getUserSignupModalState", "getUserForgotPasswordModalState"]),
    userLogin() {
      return this.getUserLoginModalState;
    },
    userSignup() {
      return this.getUserSignupModalState;
    },
    forgotPassword() {
      return this.getUserForgotPasswordModalState;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
</style>
