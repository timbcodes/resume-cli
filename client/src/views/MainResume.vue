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
        <JobTitle
          v-if="jobTitle"
          @loading="showLoading"
          @noLoading="hideLoading"
          @nextPage="goToFields"
          @message="showMessage"
        />
        <JobDetails
          v-if="fields"
          @loading="showLoading"
          @noLoading="hideLoading"
          @nextPage="goToLinks"
          @message="showMessage"
        />
      </div>
      <div class="resume-footer">
        <div class="resume-lower-input">
          <p v-if="!loading && !message && details">
            Fields with * must be completed
          </p>
          <p v-if="!loading && !message && (jobTitle || fields)">
            All fields must be completed, hit <span>RETURN</span> to continue
            when done
          </p>
          <LowerMessage v-if="message" :message="messageContent" />
          <LowerLoading v-if="loading" />
        </div>
        <div class="resume-menu-footer-container">
          <MainMenuFooter>
            <ResumeFooterMenu v-if="!fields" />
            <ResumeFieldsMenu v-if="fields" />
          </MainMenuFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserDetails from "@/components/MainResume/UI/UserDetails.vue";
import JobTitle from "@/components/MainResume/JobTitle.vue";
import JobDetails from "@/components/MainResume/JobDetails.vue";
import LowerLoading from "@/components/UI/LowerLoading.vue";
import LowerMessage from "@/components/UI/LowerMessage.vue";
import ResumeFooterMenu from "@/components/MainResume/UI/ResumeFooterMenu.vue";
import ResumeFieldsMenu from "@/components/MainResume/UI/ResumeFieldsMenu.vue";
import MainMenuFooter from "@/components/MainMenu/UI/MainMenuFooter.vue";
export default {
  name: "MainResume",
  components: {
    UserDetails,
    JobDetails,
    JobTitle,
    LowerLoading,
    LowerMessage,
    ResumeFooterMenu,
    ResumeFieldsMenu,
    MainMenuFooter,
  },
  data() {
    return {
      details: false,
      jobTitle: false,
      fields: true,
      message: false,
      messageContent: "",
      loading: false,
    };
  },
  methods: {
    goToJobTitle() {
      this.fields = false;
      this.details = false;
      this.jobTitle = true;
    },
    goToFields() {
      this.fields = true;
      this.details = false;
      this.jobTitle = false;
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
      span {
        color: $ResBlack;
        background-color: $ResGreen;
      }
    }
    .resume-menu-footer-container {
      width: 100%;
      height: 50px;
      border-top: 1px solid $ResGreen;
    }
  }
}
</style>
