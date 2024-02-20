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
      <div class="user-section">
        <CurrentUser />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CurrentUser from "@/components/MainDash/UI/TopBarUI/CurrentUser";
export default {
  name: "TopBar",
  data() {
    return {};
  },
  components: {
    CurrentUser,
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
  @include flex(row, space-between, center);
  .left-side {
    width: 25%;
    height: 100%;
    @include flex(row, flex-start, center);
    .name-section {
      margin-left: 1em;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .right-side {
    width: 75%;
    height: 100%;
    @include flex(row, flex-end, center);
    gap: 2em;
    margin-right: 1em;
    .search-bar {
      width: 200px;
      height: 30px;
      input {
        background-color: $ResGrey;
        caret-color: $ResWhite;
        color: $ResWhite;
        width: 100%;
        height: 100%;
        padding: 10px;
        border: 1px solid $ResBorder;
        border-radius: 5px;
        outline: none;
      }
    }
    .current-tokens {
      margin-left: 20px;
      font-size: 1.2rem;
      i {
        margin-right: 5px;
      }
    }
    .notification-section {
      margin-left: 20px;
      font-size: 1.5rem;
    }
    .user-section {
      margin-left: 20px;
    }
  }
}
</style>