<template>
  <div class="main-dashboard">
    <div class="left-side-menu-container">
      <MainMenu />
    </div>
    <div class="right-side-content-container">
      <div class="top-bar">
        <TopBar />
      </div>
      <div class="main-content" v-if="!loading">
        <!-- <Resumes v-if="Resumes" /> -->
      </div>
      <div class="loading-container" v-if="loading">
        <MainLoading />
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import MainMenu from "@/components/MainDash/MainMenu";
import TopBar from "@/components/MainDash/TopBar";
import MainLoading from "@/components/UI/MainLoadingSpinner";
export default {
  name: "MainDash",
  components: {
    MainMenu,
    TopBar,
    MainLoading,
  },
  data() {
    return {
      loading: false,
      userData: null
    };
  },
  computed: {
    ...mapGetters(["getUserData", "getCurrentPage"]),
    newUser() {
      return this.getUserData;
    }
  },
  methods: {
    ...mapMutations(["setCurrentPage"]),
    ...mapActions(["hydrateUserData"]),
    setPageToDashboard() {
      this.setCurrentPage("Dashboard");
    }
  },
  async created() {
    this.setPageToDashboard();
    // When created, get the user data. If the userdata doesn't exist, run the new user setup wizard
    this.loading = true;
    await this.hydrateUserData();
    if (!this.newUser) {
      this.$router.push("/new-user-setup");
    }
    this.loading = false;  
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.main-dashboard {
  @include flex(row, center, center);
  width: 100%;
  height: 100%;
  .left-side-menu-container {
    width: 200px;
    height: 100%;
  }
  .right-side-content-container {
    width: calc(100% - 200px);
    height: 100%;
    @include flex(column, center, center);
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
      @include flex(column, center, center);
      span {
        margin-top: 1em;
      }
    }
  }
}
</style>