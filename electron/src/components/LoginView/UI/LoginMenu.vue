<template>
  <div>
    <p><span>RETURN</span> Submit</p>
    <p><span>TAB</span> Select/Cycle Fields</p>
    <p><span>F5</span> Register</p>
    <p><span>F8</span> Reset Password</p>
    <p><span>ESC</span> Exit</p>
  </div>
</template>
<script>
export default {
  name: "LoginMenu",
  methods: {
    register() {
      this.$emit("register");
    },
    resetPass() {
      this.$emit("resetPass");
    },
    exit() {
      this.$emit("exit");
    },
    handleKeydown(e) {
      if (e.key === "F5") {
        this.register();
      } else if (e.key === "F8") {
        this.resetPass();
      } else if (e.key === "Escape") {
        this.exit();
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
