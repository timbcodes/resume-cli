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
          <div class="login-container"></div>
          <div class="register-container"></div>
          <div class="reset-pass-container"></div>
        </div>
        <div class="right-side">
          <div class="system-info-container">
            <TimeClock />
            <p>Version: {{ version }}</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="lower-input"></div>
        <div class="footer-container"></div>
      </div>
    </div>
  </div>
</template>
<script>
import AppLogo from "@/components/LoginView/UI/AppLogo.vue";
import TimeClock from "@/components/LoginView/UI/TimeClock.vue";
export default {
  name: "LoginScreen",
  components: {
    AppLogo,
    TimeClock,
  },
  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
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
