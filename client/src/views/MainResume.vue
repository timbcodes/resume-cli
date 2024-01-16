<template>
  <div>
    <div class="logo-container">
      <p>RM/50 by Borderland Software</p>
    </div>
    <div class="main-resume">
      <div class="main-resume-container">
        <UserDetails
          v-if="details"
          @loading="showLoading"
          @noLoading="hideLoading"
          @next="goToJobTitle"
          @message="showMessage"
        />
      </div>
      <div class="resume-footer">
        <div class="resume-lower-input">
          <p v-if="!loading && !message">Fields with * must be completed</p>
          <LowerMessage v-if="message" :message="messageContent" />
          <LowerLoading v-if="loading" />
        </div>
        <div class="resume-menu-footer-container">
          <MainMenuFooter>
            <ResumeFooterMenu />
          </MainMenuFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserDetails from "@/components/MainResume/UI/UserDetails.vue";
import LowerLoading from "@/components/UI/LowerLoading.vue";
import LowerMessage from "@/components/UI/LowerMessage.vue";
import ResumeFooterMenu from "@/components/MainResume/UI/ResumeFooterMenu.vue";
import MainMenuFooter from "@/components/MainMenu/UI/MainMenuFooter.vue";
export default {
  name: "MainResume",
  components: {
    UserDetails,
    LowerLoading,
    LowerMessage,
    ResumeFooterMenu,
    MainMenuFooter,
  },
  data() {
    return {
      details: true,
      jobTitle: false,
      message: false,
      messageContent: "",
      loading: false,
    };
  },
  methods: {
    goToJobTitle() {
      this.details = false;
      this.jobTitle = true;
    },
    showLoading() {
      this.loading = true;
    },
    hideLoading() {
      this.loading = false;
    },
    showMessage(message) {
      this.message = true;
      this.messageContent = message;
      setTimeout(() => {
        this.message = false;
      }, 3000);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.logo-container {
  width: 100%;
  height: 50px;
  @include flexCenter();
}
.main-resume {
  width: 100%;
  height: calc(100vh - 50px);
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
