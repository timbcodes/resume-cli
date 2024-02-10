<template>
  <div>
    <p>
      Are you sure you want to exit? (Type "Y" for yes, any other key for no):
    </p>
    <input
      type="text"
      v-model="exitConfirm"
      @keyup.enter="exit"
      ref="exitField"
    />
  </div>
</template>
<script>
export default {
  name: "ExitApp",
  data() {
    return {
      exitConfirm: "",
    };
  },
  methods: {
    exit() {
      if (this.exitConfirm === "Y" || this.exitConfirm === "y") {
        localStorage.clear();
        window.electron.send("close-app");
      } else {
        this.exitConfirm = "";
        this.$emit("close-exit");
      }
    },
  },
  mounted() {
    this.$refs.exitField.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
div {
  width: 100%;
  height: 25px;
  @include flex(row, flex-start, center);
}
</style>
