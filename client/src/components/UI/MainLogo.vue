<template>
  <div class="logo-container">
    <div class="circle-logo">
      <span>t</span>
    </div>
    <div class="tresume-logo">
      <span>tresume.</span>
      <span>co</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainLogo",
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
.logo-container {
  height: 100%;
  width: 100%;
  @include flex(row, flex-start, center);
  margin-left: 1em;
  font-weight: 700;
  color: $ResWhite;
  .circle-logo {
    @include flex(row, center, center);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: $ResPurple;
    span {
      font-size: 1.5em;
      color: $ResWhite;
    }
  }
  .tresume-logo {
    @include flex(row, flex-start, center);
    margin-left: 0.25em;
    span {
      font-size: 1.25em;
      color: $ResWhite;
      &:nth-child(2) {
        font-size: 1.35em;
        color: $ResPurple;
      }
    }
  }
}
</style>
