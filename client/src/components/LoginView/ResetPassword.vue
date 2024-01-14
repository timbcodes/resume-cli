<template>
  <div>
    <div class="username" v-if="!twoFactor">
      <p>Username:</p>
      <input type="text" v-model="username" ref="usernameField" />
    </div>
    <div class="new-password" v-if="!twoFactor">
      <p>New Password:</p>
      <input type="password" v-model="newPassword" ref="newPasswordField" />
    </div>
    <div class="confirm-new-password" v-if="!twoFactor">
      <p>Confirm New Password:</p>
      <input
        type="password"
        v-model="confirmNewPassword"
        @keyup.enter="submit"
        ref="confirmNewPasswordField"
      />
    </div>
    <div class="two-factor-field" v-if="twoFactor">
      <p>Enter the code you received in your email:</p>
      <input
        type="text"
        v-model="twoFactorCode"
        @keyup.enter="resetPassword"
        ref="twoFactorField"
      />
    </div>
  </div>
</template>
<script>
import Joi from "joi";
export default {
  name: "PasswordResetFields",
  data() {
    return {
      username: "",
      newPassword: "",
      confirmNewPassword: "",
      twoFactor: false,
      twoFactorCode: "",
    };
  },
  methods: {
    validateData() {
      const schema = Joi.object({
        username: Joi.string().required().messages({
          "string.empty": "Username is required",
        }),
        newPassword: Joi.string().min(8).required().messages({
          "string.min": "New Password must be at least 8 characters",
          "string.empty": "New Password is required",
        }),
        confirmNewPassword: Joi.string()
          .valid(Joi.ref("newPassword"))
          .required()
          .messages({
            "any.only": "Passwords do not match",
            "string.empty": "Confirm New Password is required",
          }),
      }).with("newPassword", "confirmNewPassword");

      const { value, error } = schema.validate({
        username: this.username,
        newPassword: this.newPassword,
        confirmNewPassword: this.confirmNewPassword,
      });
      return { value, error };
    },
    submit() {
      const { error } = this.validateData();
      if (error) {
        const errorMessage = error.details
          .map((detail) => detail.message)
          .join(". ");
        this.$emit("error", errorMessage);
        return;
      }
      // Show two-factor authentication input
      this.twoFactor = true;
    },
    resetPassword() {
      // Add your logic here to handle password reset with two-factor code
      this.$emit(
        "reset-password",
        this.username,
        this.newPassword,
        this.twoFactorCode
      );
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
  .new-password,
  .confirm-new-password,
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
