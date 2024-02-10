<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LoginFooter",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
div {
  width: 100%;
  height: 100%;
  span {
    color: $ResBlack;
    background-color: $ResGreen;
  }
}
</style>
