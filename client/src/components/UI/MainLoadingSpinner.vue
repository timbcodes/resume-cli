<template>
  <div class="loading-spinner"></div>
</template>
<script>
export default {
  name: "MainLoadingSpinner",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid $ResBlack;
  border-radius: 50%;
  border-top: 5px solid $ResPurple;
  animation: spin 1s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
