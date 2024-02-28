<template>
    <div class="wrapper">
      <div class="main-loading">
        <MainLoading />
        <span>Loading...</span>
      </div>
      <div class="main-dashboard" v-if="hydrationCheck">
        <div class="left-side-menu-container">
          <MainMenu />
        </div>
        <div class="right-side-content-container">
          <div class="top-bar">
            <TopBar />
          </div>
          <div class="main-content" v-if="!loading">
            <MainDashboard v-if="currentPage == 'Dashboard'" />
            <CandidateDetails v-if="currentPage == 'Candidate Details'" />
          </div>
          <div class="loading-container" v-if="loading">
            <MainLoading />
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import MainMenu from "@/components/MainDash/MainMenu";
import TopBar from "@/components/MainDash/TopBar";
import MainLoading from "@/components/UI/MainLoadingSpinner";
import MainDashboard from "@/components/MainDash/MainDashboard";
import CandidateDetails from "@/components/MainDash/CandidateDetails";
export default {
  name: "MainDash",
  components: {
    MainMenu,
    TopBar,
    MainLoading,
    MainDashboard,
    CandidateDetails,
  },
  data() {
    return {
      hydrationCheck: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getLoginData", "getUserData", "getCurrentPage"]),
    loginData() {
      return this.getLoginData;
    },
    userData() {
      return this.getUserData;
    },
    currentPage() {
      return this.getCurrentPage;
    }
  },
  methods: {
    ...mapMutations(["setCurrentPage"]),
    ...mapActions(["hydrateLoginData", "hydrateUserData"]),
    setPageToDashboard() {
      this.setCurrentPage("Dashboard");
    }
  },
  async created() {
    this.setPageToDashboard();
    this.loading = true;
    await this.hydrateLoginData();
    await this.hydrateUserData();
    this.hydrationCheck = true;
    if (!this.loginData.personal_info || !this.loginData.additional_info || !this.loginData.summary) {
      this.$router.push("/new-user-setup");
    }
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.wrapper {
  width: 100%;
  height: 100%;
  .main-loading {
    width: 100%;
    height: 100%;
    @include flexCenterColumn;
    span {
      margin-top: 1em;
    }
  }
  .main-dashboard {
    @include flexCenter;
    width: 100%;
    height: 100%;
    .left-side-menu-container {
      width: 200px;
      height: 100%;
    }
    .right-side-content-container {
      width: calc(100% - 200px);
      height: 100%;
      @include flexCenterColumn;
      .top-bar {
        width: 100%;
        height: 50px;
      }
      .main-content {
        width: 100%;
        height: calc(100% - 50px);
      }
      .loading-container {
        width: 100%;
        height: 100%;
        @include flexCenterColumn;
        span {
          margin-top: 1em;
        }
      }
    }
  }
}
</style>