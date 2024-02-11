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
          <span>
            <span>Tresume.</span>
            <span class="co">co</span>
          </span>
          </div>
        <div class="menu">
            <span>Get Started</span>
            <span>Learn More</span>
            <span>Sign In</span>
        </div>
      </div>
      <div class="main-content"></div>
      <div class="bottom-footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LandingPage",
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em 0;
      .logo {
        font-size: 24px;
        font-weight: 600;
        padding-left: 20px;
        .co {
          color: $ResPurple;
        }
      }
      .menu {
        padding-right: 20px;
        span {
          padding: 0 1em;
          cursor: pointer;
          &:hover {
            color: $ResPurple;
          }
        }
      }
    }
  }
}
</style>
