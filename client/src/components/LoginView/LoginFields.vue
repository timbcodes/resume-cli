<template>
  <div>
    <div class="username">
      <p>Email:</p>
      <input type="text" v-model="email" ref="emailField" />
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
import { mapActions, mapMutations } from "vuex";
export default {
  name: "LoginFields",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    ...mapMutations(["setUserData"]),
    async login() {
      this.$emit("clearMessage");
      this.$emit("loading");
      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        const results = await this.loginUser(data);
        if (results.status === 200) {
          console.log(results.data.response);
          localStorage.setItem("jwtToken", results.data.token);
          this.setUserData(results.data.response);
          this.$router.go();
          this.$emit("noload");
        }
        this.$emit("noload");
      } catch (error) {
        this.$emit("noload");
        this.$emit("message", "Invalid email or password");
        this.email = "";
        this.password = "";
        this.$refs.emailField.focus();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.emailField.focus();
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
