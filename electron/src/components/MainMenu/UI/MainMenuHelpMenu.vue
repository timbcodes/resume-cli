<template>
  <div>
    <p><span>F1</span> Go Back</p>
  </div>
</template>
<script>
export default {
  name: "LoginMenu",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.go();
    },
    exit() {
      this.$emit("exit");
    },
    handleKeydown(e) {
      if (e.key === "F1") {
        this.$emit("closeHelp");
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
div {
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  @include flex(row, space-evenly, center);
  span {
    color: $ResBlack;
    background-color: $ResGreen;
  }
}
</style>
