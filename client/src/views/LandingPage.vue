<template>
  <div class="main-landing-container">
    <div class="left-side">
      <div class="video-container">
        <video ref="myVideo" preload="auto" autoplay loop muted>
          <source src="@/assets/introvideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="right-side">
      <div class="top-header">
        <div class="logo">
          <span>Tresume.</span>
          <span id="co">co</span>
        </div>
        <div class="menu">
            <span>Get Started</span>
            <span>Learn More</span>
            <span>Sign In</span>
        </div>
      </div>
      <div class="main-content">
        <MainContent />
      </div>
      <div class="bottom-footer">
        <div class="borderland-logo">
          <img src="@/assets/borderland-logo.png" alt="borderland-logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainContent from "@/components/LandingPage/MainContent.vue";
export default {
  name: "LandingPage",
  components: {
    MainContent,
  },
  data() {
    return {
      video: null,
    };
  },
  mounted() {
    this.video = this.$refs.myVideo;
    this.video.play();
  },
}
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.main-landing-container {
  display: flex;
  overflow: hidden;
  .left-side {
    height: 100%;
    width: auto;
    min-width: 590px;
    .video-container {
      width: 100%;
      height: 100vh;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .right-side {
    width: calc(100% - 590px);
    .top-header {
      height: 50px;
      @include flex(row, space-between, center);
      padding: 1em 0;
      .logo {
        animation: fadeInDown;
        animation-duration: 0.5s;
        padding-left: 20px;
        span {
          font-size: 1.25em;
          font-weight: 600;
        }
        #co {
          color: $ResPurple !important;
        }
      }
      .menu {
        padding-right: 20px;
        animation: fadeInDown;
        animation-duration: 0.5s;
        span {
          padding: 0 1em;
          cursor: pointer;
          &:hover {
            color: $ResPurple;
          }
        }
      }
    }
    .main-content {
      height: calc(100vh - 100px);
      width: 100%;
    }
    .bottom-footer {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 50px;
      .borderland-logo {
        padding: 20px;
        img {
          width: 100px;
        }
      }
    }
  }
}
</style>
