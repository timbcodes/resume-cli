<template>
  <div>
    <div class="main-menu-container">
      <div class="menu-app-logo">
        <AppLogo />
        <div class="menu-app-logo-text">
          <p>AI Resume Systems</p>
          <p>&copy; 2024 Borderland Software LLC.</p>
        </div>
      </div>
      <div class="main-menu-container"></div>
      <div class="main-menu-footer">
        <div class="menu-lower-input">
          <div v-if="exitDialog">
            <ExitApp @close-exit="closeExitDialog" />
          </div>
          <LowerMessage v-if="message" :message="messageContent" />
          <LowerLoading v-if="loading" />
        </div>
        <div class="menu-footer-container">
          <MainMenuFooter>
            <MainMenuFooterMenu
              @exit="openExitDialog"
              @logout="logout"
              @resume="openResume"
            />
          </MainMenuFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppLogo from "@/components/LoginView/UI/AppLogo.vue";
import LowerLoading from "@/components/UI/LowerLoading.vue";
import LowerMessage from "@/components/UI/LowerMessage.vue";
import ExitApp from "@/components/UI/ExitApp.vue";
import MainMenuFooterMenu from "@/components/MainMenu/UI/MainMenuFooterMenu.vue";
import MainMenuFooter from "@/components/MainMenu/UI/MainMenuFooter.vue";
export default {
  name: "MenuScreen",
  components: {
    AppLogo,
    LowerLoading,
    LowerMessage,
    ExitApp,
    MainMenuFooterMenu,
    MainMenuFooter,
  },
  data() {
    return {
      exitDialog: false,
      message: false,
      messageContent: "",
      loading: false,
    };
  },
  methods: {
    openExitDialog() {
      this.exitDialog = true;
    },
    closeExitDialog() {
      this.exitDialog = false;
    },
    lowerMessage(message) {
      this.message = true;
      this.messageContent = message;
    },
    clearMessage() {
      this.message = false;
      this.messageContent = "";
    },
    lowerLoading() {
      this.loading = true;
    },
    loadingOff() {
      this.loading = false;
    },
    logout() {
      this.$router.push("/");
    },
    openResume() {
      this.$router.push("/resume");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-menu-container {
  width: 100%;
  height: 100vh;
  @include flex(column, space-evenly, center);
  .menu-app-logo {
    width: 100%;
    height: auto;
    @include flexCenterColumn();
    .menu-app-logo-text {
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
  .main-menu-container {
    width: 100%;
    height: auto;
    @include flex(row, center, space-evenly);
  }
  .main-menu-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    .menu-lower-input {
      width: 100%;
      height: 25px;
      .exit-confirmation {
        width: 100%;
        height: 25px;
        @include flex(row, flex-start, center);
      }
    }
    .menu-footer-container {
      width: 100%;
      height: 50px;
      border-top: 1px solid $ResGreen;
    }
  }
}
</style>
