<template>
  <div class="main-body">
    <div class="main-content">
      <div class="big-box">
        <UserInfo />
      </div>
    </div>
    <div class="logo-footer">
      <img src="@/assets/borderland-logo.png" alt="borderland software logo">
    </div>
  </div>
</template>
<script>
import UserInfo from "@/components/NewUserSetup/UserInfo";
export default {
  name: "NewUserSetup",
  components: {
    UserInfo,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.main-body {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/setup.jpg");
  background-size: cover;
  background-position: center;
  .main-content {
    width: 100%;
    height: calc(100vh - 50px);
    @include flexCenter;
    .big-box {
      width: 1000px;
      height: 600px;
      background-color: rgba(0, 0, 0, 0.75);
      border-radius: $ResRoundedEdges;
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.2);
    }
  }
  .logo-footer {
    width: 100%;
    height: 50px;
    @include flex(row, flex-end, center);
    img {
      margin-right: 1em;
      height: 20px;
    }
  }
}
</style>
