<template>
  <div>
    <div class="main-menu">
      <div v-if="help">
        <MenuHelp @close-help="closeHelp" />
      </div>
      <div class="menu-app-logo" v-if="!help">
        <AppLogo />
        <div class="menu-app-logo-text">
          <p>AI Resume Systems</p>
          <p>&copy; 2024 Borderland Software LLC.</p>
        </div>
      </div>
      <div class="main-menu-container" v-if="!help">
        <MainMenu />
      </div>
      <div class="main-menu-footer">
        <div class="help-fix" v-if="help"></div>
        <div class="menu-lower-input" v-if="!help">
          <div class="menu-selection-container" v-if="menuOpen">
            <div class="menu-selection">
              <p>Enter the Number of Your Selection:</p>
              <input type="text" ref="menuSelect" @keyup.enter="goToMenu" />
            </div>
          </div>
          <div v-if="exitDialog">
            <ExitApp @close-exit="closeExitDialog" />
          </div>
          <LowerMessage v-if="message" :message="messageContent" />
          <LowerLoading v-if="loading" />
        </div>
        <div class="menu-footer-container">
          <MainMenuFooter>
            <MainMenuFooterMenu
              v-if="!help"
              @exit="openExitDialog"
              @logout="logout"
              @help="openHelp"
            />
            <MainMenuHelpMenu
              v-if="help"
              @closeHelp="closeHelp"
              @exit="openExitDialog"
              @logout="logout"
            />
          </MainMenuFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuHelp from "@/components/MainMenu/UI/MenuHelp.vue";
import AppLogo from "@/components/LoginView/UI/AppLogo.vue";
import MainMenu from "@/components/MainMenu/MainMenu.vue";
import LowerLoading from "@/components/UI/LowerLoading.vue";
import LowerMessage from "@/components/UI/LowerMessage.vue";
import ExitApp from "@/components/UI/ExitApp.vue";
import MainMenuFooterMenu from "@/components/MainMenu/UI/MainMenuFooterMenu.vue";
import MainMenuHelpMenu from "@/components/MainMenu/UI/MainMenuHelpMenu.vue";
import MainMenuFooter from "@/components/MainMenu/UI/MainMenuFooter.vue";
export default {
  name: "MenuScreen",
  components: {
    MenuHelp,
    AppLogo,
    MainMenu,
    LowerLoading,
    LowerMessage,
    ExitApp,
    MainMenuFooterMenu,
    MainMenuHelpMenu,
    MainMenuFooter,
  },
  data() {
    return {
      menuOpen: true,
      exitDialog: false,
      message: false,
      messageContent: "",
      loading: false,
      help: false,
    };
  },
  methods: {
    // use a switch statement to determine which menu to go to
    goToMenu() {
      const selection = this.$refs.menuSelect.value;
      switch (selection) {
        case "1":
          this.$router.push("/resume");
          break;
        case "2":
          this.$router.push("/edit-user-details");
          break;
        case "3":
          this.$router.push("/edit-main-resume-details");
          break;
        case "4":
          this.$router.push("/download-main-resume");
          break;
        case "5":
          this.$router.push("/edit-generation-parameters");
          break;
        case "6":
          this.$router.push("/generate-new-job");
          break;
        case "7":
          this.$router.push("/generate-new-resume");
          break;
        case "8":
          this.$router.push("/generate-new-cover-letter");
          break;
        case "9":
          this.$router.push("/view-all-created-jobs");
          break;
        default:
          this.lowerMessage("Invalid Selection");
          this.$refs.menuSelect.value = "";
          setTimeout(() => {
            this.clearMessage();
            this.$nextTick(() => {
              this.$refs.menuSelect.focus();
            });
          }, 2000);
          break;
      }
    },
    openHelp() {
      this.menuOpen = false;
      this.help = true;
    },
    closeHelp() {
      this.help = false;
      this.menuOpen = true;
      this.$nextTick(() => {
        this.$refs.menuSelect.focus();
      });
    },
    openExitDialog() {
      this.menuOpen = false;
      this.exitDialog = true;
    },
    closeExitDialog() {
      this.exitDialog = false;
      this.menuOpen = true;
      this.$nextTick(() => {
        this.$refs.menuSelect.focus();
      });
    },
    lowerMessage(message) {
      this.menuOpen = false;
      this.message = true;
      this.messageContent = message;
    },
    clearMessage() {
      this.message = false;
      this.messageContent = "";
      this.menuOpen = true;
      this.$nextTick(() => {
        this.$refs.menuSelect.focus();
      });
    },
    lowerLoading() {
      this.menuOpen = false;
      this.loading = true;
    },
    loadingOff() {
      this.loading = false;
      this.menuOpen = true;
      this.$nextTick(() => {
        this.$refs.menuSelect.focus();
      });
    },
    logout() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.$refs.menuSelect.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-menu {
  width: 100%;
  height: 100vh;
  @include flex(column, center, center);
  gap: 5em;
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
  }
  .main-menu-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    .help-fix {
      width: 100%;
      height: 25px;
    }
    .menu-lower-input {
      width: 100%;
      height: 25px;
      .menu-selection {
        @include flex(row, flex-start, center);
      }
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
