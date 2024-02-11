<template>
  <div>
    <button class="login-button">Login</button>
    <button class="signup-button">Sign Up</button>
  </div>
</template>
<script>
export default {
  name: "LoginSignupButtons",
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
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
  &.login-button {
    background-color: $ResPurple;
    color: $ResWhite;
  }
  &.signup-button {
    background-color: $ResPurple;
    color: $ResWhite;
  }
}
</style>
