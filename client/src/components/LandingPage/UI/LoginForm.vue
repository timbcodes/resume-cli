<template>
  <div>
    <form class="login-form">
      <h2>Welcome Back!</h2>
      <input type="text" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>Don't have an account? <span>Sign Up</span></p>
      <p>Forgot your password? <span>Click Here</span></p>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginForm"
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.login-form {
  @include flexCenterColumn;
  height: 100%;
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
    }
  }
}
</style>
