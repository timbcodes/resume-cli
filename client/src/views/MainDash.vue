<template>
  <div class="main-dashboard">
    <div class="left-side-menu-container">
      <MainMenu />
    </div>
    <div class="right-side-content-container">
      <div class="top-bar"></div>
      <div class="main-content"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import MainMenu from "@/components/MainDash/MainMenu";
export default {
  name: "MainDash",
  components: {
    MainMenu
  },
  data() {
    return {
      userData: null
    };
  },
  methods: {
    ...mapMutations(["setCurrentPage"]),
    setPageToDashboard() {
      this.setCurrentPage("dashboard");
    }
  },
  created() {
    this.setPageToDashboard();
    // When created, get the user data. If the userdata doesn't exist, run the new user setup wizard
  },
  mounted() {
    // mounted
  }
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
  }
}
</style>