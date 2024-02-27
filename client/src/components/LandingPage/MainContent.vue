<template>
  <div class="title-container">
    <div class="title-section">
      <div class="fixed-title">The Job Search Assistant that:</div>
      <div class="cycle-through-titles">
        <span class="animated-title">
          {{ titles[currentTitle] }}
        </span>
      </div>
    </div>
    <div class="button-container">
      <LoginSignupButtons />
    </div>
    <div class="call-to-action">
      <p>Click <span @click="openSignup">Get Started</span> to Create Your Free AI Resume, No Credit Card Required</p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import LoginSignupButtons from "@/components/LandingPage/UI/LoginSignupButtons";
export default {
  name: "MainContent",
  components: {
    LoginSignupButtons,
  },
  data() {
    return {
      titles: [
        "Doesn't Charge a Monthly Fee",
        "Tailors Your Resume to the Job",
        "Writes Flawless Cover Letters",
        "Keeps Your Personal Information Private",
        "Lets Recruiters Easily Find You",
        "Answers Application Questions",
        "Organizes Your Job Search",
        "Improves Your LinkedIn Profile",
        "Helps you Prepare for Interviews",
      ],
      currentTitle: 0,
    };
  },
  methods: {
    ...mapMutations(["setUserAuthModalState", "setUserSignupModalState"]),
    openSignup() {
      this.setUserAuthModalState(true);
      this.setUserSignupModalState(true);
    },
    cycleTitles() {
      setInterval(() => {
        if (this.currentTitle === this.titles.length - 1) {
          this.currentTitle = 0;
          } else {
            this.currentTitle++;
          }
          const titleElement = this.$el.querySelector('.animated-title');
          if (titleElement) {
            // fade out, the fade in
            titleElement.style.animation = 'none';
            titleElement.offsetHeight;
            titleElement.style.animation = null;
          }
        }, 3000);
      },
    },
  mounted() {
    this.cycleTitles();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.title-container {
  @include flexCenterColumn;
  width: 100%;
  height: 100vh;
  .title-section {
    text-align: center;
    .fixed-title,
    .animated-title {
      font-size: 3em;
      font-weight: bold;
    }
    .animated-title {
      animation: fadeIn;
      animation-duration: 2s;
    }
  }
  .call-to-action {
    margin-top: 2em;
    p {
      font-size: 1em;
      font-weight: bold;
      span {
        color: $ResPurple;
        cursor: pointer;
      }
    }
  }
  .button-container {
    margin-top: 1em;
  }
}
</style>
