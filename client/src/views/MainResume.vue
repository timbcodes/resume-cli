<template>
  <div>
    <div class="main-resume">
      <div class="resume-footer">
        <div class="resume-lower-input"></div>
        <div class="resume-menu-footer-container">
          <MainMenuFooter>
            <ResumeFooterMenu
              v-if="!help"
              @exit="openExitDialog"
              @logout="logout"
              @help="openHelp"
            />
          </MainMenuFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ResumeFooterMenu from "@/components/MainResume/UI/ResumeFooterMenu.vue";
import MainMenuFooter from "@/components/MainMenu/UI/MainMenuFooter.vue";
export default {
  name: "MainResume",
  components: {
    ResumeFooterMenu,
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
    openExitDialog() {
      this.exitDialog = true;
    },
    closeExitDialog() {
      this.exitDialog = false;
    },
    openHelp() {
      this.help = true;
    },
    closeHelp() {
      this.help = false;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-resume {
  width: 100%;
  height: 100vh;
  @include flexCenterColumn();
  .resume-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    .resume-lower-input {
      width: 100%;
      height: 25px;
    }
    .resume-menu-footer-container {
      width: 100%;
      height: 50px;
      border-top: 1px solid $ResGreen;
    }
  }
}
</style>
