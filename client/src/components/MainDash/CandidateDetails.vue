<template>
  <div class="candidate-details">
    <div class="left-card">
      <CandidateCard
        :loading="cardLoading"
        :user="userData"
        :loggedInUser="loginData"
        @rehydrate="rehydrate"
      />
    </div>
    <div class="right-card">
      <AdditionalDetails
        :loading="detailLoading"
        :user="userData"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import CandidateCard from "@/components/MainDash/UI/CandidateDetails/CandidateCard";
import AdditionalDetails from "@/components/MainDash/UI/CandidateDetails/AdditionalDetails";
export default {
  name: "CandidateDetails",
  components: {
    CandidateCard,
    AdditionalDetails,
  },
  data() {
    return {
      cardLoading: true,
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["getUserData", "getLoginData"]),
    userData() {
      return this.getUserData;
    },
    loginData() {
      return this.getLoginData;
    },
  },
  methods: {
    ...mapActions(["hydrateUserData", "hydrateLoginData"]),
    async buildUser() {
      await this.hydrateUserData();
    },
    async buildLogin() {
      await this.hydrateLoginData();
    },
    async rehydrate() {
      this.cardLoading = true;
      this.loading = true;
      await this.hydrateUserData();
      await this.hydrateLoginData();
      this.loading = false;
      this.cardLoading = false;
    },
  },
  async created() {
    this.cardLoading = true;
    this.detailLoading = true;
    await this.buildUser();
    this.detailLoading = false;
    await this.buildLogin();
    this.cardLoading = false;
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.candidate-details {
  width: 100%;
  height: 100%;
  @include flexCenter;
  .left-card {
    width: 30%;
    height: 100%;
    @include flexCenter;
  }
  .right-card {
    width: 70%;
    height: 100%;
    @include flexCenter;
  }
}
</style>
