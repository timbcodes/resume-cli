<template>
  <div>
    <div class="username" v-if="!twoFactor">
      <p>Email:</p>
      <input type="text" v-model="email" ref="emailField" />
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
      email: "",
      newPassword: "",
      confirmNewPassword: "",
      twoFactor: false,
      twoFactorCode: "",
    };
  },
  methods: {
    validateData() {
      const schema = Joi.object({
        email: Joi.string().required().messages({
          "string.empty": "Email is required",
        }),
        newPassword: Joi.string().min(8).max(254).required().messages({
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
        email: this.email,
        newPassword: this.newPassword,
        confirmNewPassword: this.confirmNewPassword,
      });
      return { value, error };
    },
    submit() {
      this.$emit("clearMessage");
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
      this.$nextTick(() => {
        this.$refs.twoFactorField.focus();
      });
    },
    resetPassword() {
      // Add your logic here to handle password reset with two-factor code
      this.$emit(
        "reset-password",
        this.email,
        this.newPassword,
        this.twoFactorCode
      );
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
