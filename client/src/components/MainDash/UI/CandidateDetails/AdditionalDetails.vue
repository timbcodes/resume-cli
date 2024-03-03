<template>
  <div class="additional-card-container">
    <div class="top-menu">
      <div
        v-for="item in menuItems"
        :key="item"
        @click="changeMenuItem(item)"
        :class="{ active: currentMenuItem === item }"
      >
        {{ item }}
      </div>
    </div>
    <div class="loading-container" v-if="loading">
      <MainLoadingSpinner />
      <p>Loading...</p>
    </div>
    <div class="main-content" v-if="!loading">
        <UserDetails
          v-if="currentMenuItem === 'Details'"
          :currentUser="user"
        />
    </div>
  </div>
</template>
<script>
import MainLoadingSpinner from "@/components/UI/MainLoadingSpinner";
import UserDetails from "./UI/UserDetails";
export default {
  name: "AdditionalDetails",
  components: {
    MainLoadingSpinner,
    UserDetails,
  },
  props: {
    loading: Boolean,
    user: Object,
  },
  data() {
    return {
      menuItems: ["Details", "Education"],
      currentMenuItem: "Details",
    };
  },
  methods: {
    changeMenuItem(item) {
      this.currentMenuItem = item;
    },
    clicked(item) {
      switch (item) {
        case "Details":
          return "Details";
        case "Education":
          return "Education";
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.additional-card-container {
  width: 90%;
  height: 70%;
  min-width: 800px;
  min-height: 600px;
  background-color: $ResGrey;
  @include flexCenterColumn;
  .top-menu {
    width: 100%;
    height: 50px;
    @include flex(row, flex-start, center);
    div {
      width: 100px;
      height: 100%;
      @include flexCenter;
      cursor: pointer;
      &.active {
        background-color: $ResPurple;
      }
      &:hover {
        background-color: $ResCream !important;
        color: $ResPurple;
      }
    }
  }
  .loading-container {
    width: 100%;
    height: 100%;
    @include flexCenterColumn;
    gap: 1em;
  }
  .main-content {
    width: calc(100% - 50px);
    height: 90%;
  }
}
</style>
