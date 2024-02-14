<template>
  <div class="menu-container">
    <div class="menu-size-toggle"></div>
    <div class="profile-info">
      <ProfileInfo />
    </div>
    <div class="control-buttons">
      <ControlButtons />
    </div>
    <div class="menu-items">
      <MenuItems />
    </div>
  </div>
</template>
<script>
import ProfileInfo from "@/components/MainDash/UI/MenuUI/ProfileInfo";
import ControlButtons from "@/components/MainDash/UI/MenuUI/ControlButtons";
import MenuItems from "@/components/MainDash/UI/MenuUI/MenuItems";
export default {
  name: "MainMenu",
  components: {
    ProfileInfo,
    ControlButtons,
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
  gap: 1em;
  .menu-size-toggle {
    width: 100%;
    height: 50px;
  }
  .profile-info {
    width: 100%;
  }
  .control-buttons {
    width: 100%;
    height: 50px;
  }
  .menu-items {
    width: 100%;
  }
}
</style>
