<template>
  <div>
    <p><span>RETURN</span> Submit</p>
    <p><span>CTRL</span>+<span>V</span> Paste from Clipboard</p>
    <p><span>TAB</span>/<span>^TAB</span> Select/Cycle Fields</p>
    <p><span>F5</span> Main Menu</p>
  </div>
</template>
<script>
export default {
  name: "LoginMenu",
  methods: {
    handleKeydown(e) {
      if (e.key === "F5") {
        this.$router.push("/");
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
