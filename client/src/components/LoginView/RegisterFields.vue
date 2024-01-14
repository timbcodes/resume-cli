<template>
  <div>
    <div class="email" v-if="!twoFactor">
      <p>Email:</p>
      <input type="text" v-model="email" ref="emailField" />
    </div>
    <div class="username" v-if="!twoFactor">
      <p>Username:</p>
      <input type="text" v-model="username" ref="usernameField" />
    </div>
    <div class="password" v-if="!twoFactor">
      <p>Password:</p>
      <input type="password" v-model="password" ref="passwordField" />
    </div>
    <div class="confirm-password" v-if="!twoFactor">
      <p>Confirm Password:</p>
      <input
        type="password"
        v-model="confirmPassword"
        @keyup.enter="submit"
        ref="confirmPasswordField"
      />
    </div>
    <div class="two-factor-field" v-if="twoFactor">
      <p>Enter the code you received in your email:</p>
      <input
        type="text"
        v-model="twoFactorCode"
        @keyup.enter="register"
        ref="twoFactorField"
      />
    </div>
  </div>
</template>
<script>
import Joi from "joi";
export default {
  name: "LoginFields",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      twoFactor: false,
      twoFactorCode: "",
    };
  },
  methods: {
    validateData() {
      const schema = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required()
          .messages({
            "string.email": "Invalid email address",
            "string.empty": "Email is required",
            "any.required": "Email is required",
          }),
        password: Joi.string().min(8).required().messages({
          "string.min": "Password must be at least 8 characters",
          "string.empty": "Password is required",
          "any.required": "Password is required",
        }),
        confirmPassword: Joi.string()
          .valid(Joi.ref("password"))
          .required()
          .messages({
            "any.only": "Passwords do not match",
            "string.empty": "Confirm Password is required",
            "any.required": "Confirm Password is required",
          }),
      });
      const { value, error } = schema.validate({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
      return { value, error };
    },
    submit() {
      this.$emit("loading");
      console.log("submit");
      const { error } = this.validateData();
      if (error) {
        const errorMessage = error.details
          .map((detail) => detail.message)
          .join(". ");
        console.log(errorMessage);
        this.$emit("noload");
        this.$emit("message", errorMessage);
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.$nextTick(() => {
          this.$refs.emailField.focus();
        });
        return;
      }
      // TODO: Check if email or username exists
      this.twoFactor = true;
      this.$nextTick(() => {
        this.$refs.twoFactorField.focus();
      });
      this.$emit("endLoading");
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
  .email,
  .username,
  .password,
  .confirm-password,
  .two-factor-field {
    width: 100%;
    height: 100%;
    @include flex(row, flex-start, center);
    input[type="password"] {
      color: transparent;
    }
  }
}
</style>
