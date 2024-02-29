<template>
  <div class="candidate-details">
    <div class="left-card">
      <CandidateCard
        :loading="cardLoading"
        :user="userData"
        :loggedInUser="loginData"
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
    buildUser() {
      this.hydrateUserData();
    },
    buildLogin() {
      this.hydrateLoginData();
    },
  },
  created() {
    this.cardLoading = true;
    this.detailLoading = true;
    this.buildUser();
    this.detailLoading = false;
    this.buildLogin();
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
