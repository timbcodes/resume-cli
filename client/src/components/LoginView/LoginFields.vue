<template>
  <div>
    <div class="username">
      <p>Username:</p>
      <input type="text" v-model="username" ref="usernameField" />
    </div>
    <div class="password">
      <p>Password:</p>
      <input
        type="password"
        v-model="password"
        @keyup.enter="login"
        ref="passwordField"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginFields",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$emit("loading");
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.usernameField.focus();
    });
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
  @include flex(column, center, center);
  .username,
  .password {
    width: 100%;
    height: 100%;
    @include flex(row, flex-start, center);
    input[type="password"] {
      color: transparent;
    }
  }
}
</style>
