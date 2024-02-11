<template>
  <div>
    <button
      v-for="button in buttons"
      :key="button.text"
      :class="button.class"
      @click="openModal(button.text)"
    >
      {{ button.text }}
    </button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "LoginSignupButtons",
  data() {
    return {
      buttons: [
        { text: "Get Started", class: "signup-button" },
        { text: "Login", class: "login-button" }
      ]
    };
  },
  methods: {
    ...mapMutations(["setUserAuthModalState", "setUserLoginModalState", "setUserSignupModalState"]),
    openModal(text) {
      this.setUserAuthModalState(true);
      if (text === "Login") {
        this.setUserLoginModalState(true);
        this.setUserSignupModalState(false);
      } else {
        this.setUserLoginModalState(false);
        this.setUserSignupModalState(true);
      }
    }
  }
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
