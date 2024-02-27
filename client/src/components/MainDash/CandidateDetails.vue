<template>
  <div class="candidate-details">
    <div class="left-card">
      <CandidateCard />
    </div>
    <div class="right-card">
      <AdditionalDetails />
    </div>
  </div>
</template>
<script>
import CandidateCard from "@/components/MainDash/UI/CandidateDetails/CandidateCard";
import AdditionalDetails from "@/components/MainDash/UI/CandidateDetails/AdditionalDetails";
export default {
  name: "CandidateDetails",
  components: {
    CandidateCard,
    AdditionalDetails,
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
  }
}
</style>
