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
        <span>Credits:</span>
        <TextLoadingSpinner class="spinner" v-if="creditLoading"/>
        <span v-if="!creditLoading">{{ showCredits }}</span>
      </div>
      <div class="user-section">
        <CurrentUser />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import TextLoadingSpinner from "@/components/UI/TextLoadingSpinner";
import CurrentUser from "@/components/MainDash/UI/TopBarUI/CurrentUser";
export default {
  name: "TopBar",
  data() {
    return {
      creditLoading: false,
    };
  },
  components: {
    TextLoadingSpinner,
    CurrentUser,
  },
  computed: {
    ...mapGetters(["getCurrentPage", "getCreditData"]),
    currentPage() {
      return this.getCurrentPage;
    },
    showCredits() {
      // return this.getCreditData or 0 if it's undefined
      return this.getCreditData ? this.getCreditData : 0;
    },
  },
  methods: {
    ...mapActions(["hydrateCreditData"]),
    getRemainingCredits() {
      this.hydrateCreditData();
    },
  },
  async beforeMount() {
    this.creditLoading = true;
    await this.getRemainingCredits();
    this.creditLoading = false;
  },
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
      @include flex(row, center, center);
      .spinner {
        margin-left: 0.5em;
      }
      span {
        margin-left: 0.25em;
      }
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