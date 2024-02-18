<template>
  <div class="main-landing-container">
    <div class="left-side">
      <div class="video-container">
        <video ref="myVideo" preload="auto" autoplay muted>
          <source :src="videos[currentVideoIndex]" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="right-side">
      <div class="top-header">
        <div class="logo" @click="goHome">
          <MainLogo />
        </div>
        <div class="menu-items">
          <ul>
            <li>Learn More</li>
            <li>Pricing</li>
            <li>Support</li>
            <li @click="openLogin">Login</li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <MainContent v-if="!isModalOpen" />
        <UserAuthModal v-if="isModalOpen" />
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
import { mapMutations, mapGetters } from "vuex";
import MainContent from "@/components/LandingPage/MainContent.vue";
import UserAuthModal from "@/components/LandingPage/UserAuthModal.vue";
import MainLogo from "@/components/UI/MainLogo.vue";
export default {
  name: "LandingPage",
  components: {
    MainContent,
    UserAuthModal,
    MainLogo,
  },
  data() {
    return {
      videos: [
        require('@/assets/introvideo.mp4'),
        require('@/assets/introvideo2.mp4'),
        require('@/assets/introvideo3.mp4'),
      ],
      currentVideoIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["getUserAuthModalState"]),
    isModalOpen() {
      return this.getUserAuthModalState;
    },
  },
  methods: {
    ...mapMutations(["setUserAuthModalState", "setUserLoginModalState"]),
    openLogin() {
      this.setUserAuthModalState(true);
      this.setUserLoginModalState(true);
    },
    nextVideo() {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
      this.$refs.myVideo.src = this.videos[this.currentVideoIndex];
      this.$refs.myVideo.play();
    },
    goHome() {
      this.$router.go();
    },
  },
  mounted() {
    this.$refs.myVideo.addEventListener("ended", this.nextVideo);
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
        cursor: pointer;
        span {
          font-size: 1.25em;
          font-weight: 600;
        }
        #co {
          color: $ResPurple !important;
        }
      }
      .menu-items {
        ul {
          display: flex;
          list-style: none;
          li {
            padding: 0 20px;
            cursor: pointer;
            transition: all 0.1s ease;
            &:hover {
              color: $ResPurple;
            }
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
