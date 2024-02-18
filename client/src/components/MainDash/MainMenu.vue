<template>
  <div class="menu-container">
    <div class="tresume-logo-container">
      <div class="logo">
        <MainLogo />
      </div>
    </div>
    <div class="menu-items">
      <MenuItems />
    </div>
  </div>
</template>
<script>
import MainLogo from "@/components/UI/MainLogo";
import ProfileInfo from "@/components/MainDash/UI/MenuUI/ProfileInfo";
import MenuItems from "@/components/MainDash/UI/MenuUI/MenuItems";
export default {
  name: "MainMenu",
  components: {
    MainLogo,
    ProfileInfo,
    MenuItems
  },
  data() {
    return {
      // data
    };
  },
  methods: {
    // methods
  },
  created() {
    // created
  },
  mounted() {
    // mounted
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.menu-container {
  @include flex(column, flex-start, center);
  width: 100%;
  height: 100%;
  background-color: $ResSmoke;
  border-right: 1px solid $ResBorder;
  overflow: hidden;
  .tresume-logo-container {
    width: 100%;
    height: 100px;
    padding-top: 1em;
    }
  .menu-items {
    height: 100%;
    width: 100%;
  }
}
</style>
