<template>
  <div class="top-bar">
    <div class="left-side">
      <div class="name-section">
        <span>{{ currentPage }}</span>
      </div>
    </div>
    <div class="right-side">
      <div class="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div class="current-tokens">
        <i class="bi bi-credit-card-fill"></i>
        <span>Credits: </span>
        <span>0</span>
      </div>
      <div class="notification-section">
        <i class="bi bi-bell-fill"></i>
      </div>
      <div class="user-section">
        <CurrentUser />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TopBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCurrentPage"]),
    currentPage() {
      return this.getCurrentPage;
    }
  },
  methods: {},
  beforeMount() {},
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.top-bar {
  width: 100%;
  height: 100%;
  background-color: $ResSmoke;
  border-bottom: 1px solid $ResBorder;
}
</style>