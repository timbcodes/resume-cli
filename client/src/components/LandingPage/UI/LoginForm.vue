<template>
  <div>
    <!-- prevent submit on click -->
    <form class="login-form">
      <h2 v-if="!error">Welcome Back!</h2>
      <h2 v-if="error">Invalid Email or Password</h2>
      <input type="text" ref="emailAddy" v-model="email" @keyup.prevent.enter="nextField" placeholder="Email Address" />
      <input type="password" ref="password" v-model="password" @keyup.prevent.enter="login" placeholder="Password" />
      <button @click.prevent="login">Login</button>
      <p>Don't have an account? <span>Sign Up</span></p>
      <p>Forgot your password? <span>Click Here</span></p>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    nextField() {
      this.$refs.password.focus();
    },
    async login() {
      if (this.email === "" || this.password === "") {
        this.error = true;
      } else {
        const res = await this.loginUser({ email: this.email, password: this.password });
        if (res === "error") {
          this.error = true;
          return;
        }
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.$refs.emailAddy.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.login-form {
  @include flexCenterColumn;
  height: 100%;
  width: 100%;
  h2 {
    margin-bottom: 20px;
  }
  input {
    width: 300px;
    height: 50px;
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    &:focus {
      outline: 2px solid $ResPurple;
    }
  }
  button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
    background-color: $ResPurple;
    color: $ResWhite;
  }
  p {
    margin-top: 20px;
    cursor: pointer;
    span {
      color: $ResPurple;
      font-weight: 600;
      transition: all 0.1s ease;
      &:hover {
        color: $ResWhite;
      }
    }
  }
}
</style>
