<template>
  <div>
    <div class="main-login-container">
      <div class="app-logo">
        <AppLogo />
        <div class="app-logo-text">
          <p>AI Resume Systems</p>
          <p>&copy; 2024 Borderland Software LLC.</p>
        </div>
      </div>
      <div class="main-content">
        <div class="left-side">
          <div class="login-container" v-if="login">
            <LoginFields
              @loading="lowerLoading"
              @noload="loadingOff"
              @message="lowerMessage"
              @clearMessage="clearMessage"
            />
          </div>
          <div class="register-container" v-if="register">
            <RegisterFields
              @loading="lowerLoading"
              @noload="loadingOff"
              @message="lowerMessage"
              @clearMessage="clearMessage"
            />
          </div>
          <div class="reset-pass-container" v-if="resetPass">
            <ResetPassword
              @loading="lowerLoading"
              @noload="loadingOff"
              @message="lowerMessage"
              @clearMessage="clearMessage"
            />
          </div>
        </div>
        <div class="right-side">
          <div class="system-info-container">
            <TimeClock />
            <p>Version: {{ version }}</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="lower-input">
          <div v-if="exitDialog">
            <ExitApp @close-exit="closeExitDialog" />
          </div>
          <LowerMessage v-if="message" :message="messageContent" />
          <LowerLoading v-if="loading" />
        </div>
        <div class="footer-container">
          <LoginFooter>
            <LoginMenu
              @register="openRegister"
              @resetPass="openResetPass"
              @exit="openExitDialog"
              v-if="login"
            />
            <RegisterMenu
              @login="openLogin"
              @resetPass="openResetPass"
              @exit="openExitDialog"
              v-if="register"
            />
            <ResetMenu
              @login="openLogin"
              @register="openRegister"
              @exit="openExitDialog"
              v-if="resetPass"
            />
          </LoginFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginFields from "@/components/LoginView/LoginFields.vue";
import LoginMenu from "@/components/LoginView/UI/LoginMenu.vue";
import RegisterFields from "@/components/LoginView/RegisterFields.vue";
import RegisterMenu from "@/components/LoginView/UI/RegisterMenu.vue";
import ResetPassword from "@/components/LoginView/ResetPassword.vue";
import ResetMenu from "@/components/LoginView/UI/ResetMenu.vue";
import AppLogo from "@/components/LoginView/UI/AppLogo.vue";
import TimeClock from "@/components/LoginView/UI/TimeClock.vue";
import LowerMessage from "@/components/UI/LowerMessage.vue";
import LowerLoading from "@/components/UI/LowerLoading.vue";
import ExitApp from "@/components/UI/ExitApp.vue";
import LoginFooter from "@/components/LoginView/UI/LoginFooter.vue";
export default {
  name: "LoginScreen",
  components: {
    LoginFields,
    LoginMenu,
    RegisterFields,
    RegisterMenu,
    ResetPassword,
    ResetMenu,
    AppLogo,
    TimeClock,
    LowerMessage,
    LowerLoading,
    ExitApp,
    LoginFooter,
  },
  data() {
    return {
      login: true,
      register: false,
      resetPass: false,
      exitDialog: false,
      exitConfirm: "",
      messageContent: "",
      message: false,
      loading: false,
    };
  },
  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },
  methods: {
    openLogin() {
      this.exitDialog = false;
      this.message = false;
      this.loading = false;
      this.login = true;
      this.register = false;
      this.resetPass = false;
    },
    openRegister() {
      this.exitDialog = false;
      this.message = false;
      this.loading = false;
      this.login = false;
      this.register = true;
      this.resetPass = false;
    },
    openResetPass() {
      this.exitDialog = false;
      this.message = false;
      this.loading = false;
      this.login = false;
      this.register = false;
      this.resetPass = true;
    },
    clearMessage() {
      this.message = false;
      this.messageContent = "";
    },
    lowerMessage(message) {
      this.message = true;
      this.messageContent = message;
    },
    lowerLoading() {
      this.loading = true;
    },
    loadingOff() {
      this.loading = false;
    },
    openExitDialog() {
      this.exitDialog = true;
    },
    closeExitDialog() {
      this.exitDialog = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-login-container {
  width: 100%;
  height: 100vh;
  @include flex(column, space-evenly, center);
  .app-logo {
    width: 100%;
    height: auto;
    @include flexCenterColumn();
    .app-logo-text {
      width: 100%;
      height: auto;
      margin-top: 2em;
      gap: 0.25em;
      @include flexCenterColumn();
      p {
        margin: 0;
        padding: 0;
        color: $ResGreen;
      }
    }
  }
  .main-content {
    width: 100%;
    height: auto;
    @include flex(row, center, space-evenly);
    .left-side {
      width: 50%;
      height: auto;
      @include flexCenterColumn();
    }
    .right-side {
      width: 50%;
      height: auto;
      @include flexCenterColumn();
      .system-info-container {
        gap: 0.5em;
        @include flex(column, center, flex-start);
        p {
          margin: 0;
          padding: 0;
          color: $ResGreen;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    .lower-input {
      width: 100%;
      height: 25px;
    }
    .footer-container {
      width: 100%;
      height: 50px;
      border-top: 1px solid $ResGreen;
    }
  }
}
</style>
