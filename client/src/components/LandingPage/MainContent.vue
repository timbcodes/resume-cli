<template>
  <div class="title-container">
    <div class="title-section">
      <div class="fixed-title">The AI Resume Software that:</div>
      <div class="cycle-through-titles">
        <span class="animated-title"> 
          {{ titles[currentTitle] }} 
        </span> 
      </div>
    </div>
    <div class="button-container">
      <LoginSignupButtons />
    </div>
  </div>
</template>
<script>
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
        "Answers Application Questions",
        "Keeps Up with Your Job Search",
        "Writes Flawless Cover Letters",
        "Improves Your LinkedIn Profile",
        "Tailors Your Resume to the Job",
        "Helps you Prepare for Interviews",
      ],
      currentTitle: 0,
    };
  },
  mounted() {
    this.cycleTitles();
  },
methods: {
    cycleTitles() {
      setInterval(() => {
        if (this.currentTitle === this.titles.length - 1) {
          this.currentTitle = 0;
        } else {
          this.currentTitle++;
        }
        const titleElement = this.$el.querySelector('.animated-title'); 
        if (titleElement) {
          titleElement.style.animation = 'none';
          titleElement.offsetHeight;
          titleElement.style.animation = null;
        }
      }, 3000);
    },
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
  .button-container {
    margin-top: 2em;
  }
}
</style>
