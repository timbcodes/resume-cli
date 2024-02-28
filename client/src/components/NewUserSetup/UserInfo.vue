<template>
  <div class="user-info">
    <div class="left-side">
      <div class="logo-header">
        <MainLogo />
      </div>
      <div class="text-box-container">
        <div class="text-box">
          <h1 class="title">Welcome!</h1>
          <p>
            I've noticed this is your first time here. Let's get started on your resume. Fill out the form to the right with the information you'd like to appear on your resume. We will never share your personal information with anyone, including our AI model or any third parties. <span>(Your email should be the one you want employers to contact you at, not necessarily the one you signed up with.)</span>
          </p>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="form">
        <h1>Enter Your Information</h1>
        <div class="error-message-container">
          <p v-if="errorMessage">{{errorMessage}}</p>
        </div>
        <form>
          <div class="input-box">
            <label for="first_name">First Name</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="first_name" v-model="form.first_name" ref="first" required>
          </div>
          <div class="input-box">
            <label for="last_name">Last Name</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="last_name" v-model="form.last_name" required>
          </div>
          <div class="input-box">
            <label for="address">Address</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="address" v-model="form.address" required>
          </div>
          <div class="input-box">
            <label for="city">City</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="city" v-model="form.city" required>
          </div>
          <div class="input-box">
            <label for="state">State</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="state" v-model="form.state" required>
          </div>
          <div class="input-box">
            <label for="zip">Zip</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="zip" v-model="form.zip" required>
          </div>
          <div class="input-box">
            <label for="phone_number">Phone Number</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="phone_number" v-model="form.phone_number" required>
          </div>
          <div class="input-box">
            <label for="email">Email</label>
            <input @keyup.enter.prevent="formSubmit" type="email" name="email" v-model="form.email" required>
          </div>
        </form>
      </div>
      <div class="submit">
        <button @click="formSubmit">
          Submit
          <TextLoadingSpinner class="spinner" v-if="loading" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Joi from 'joi';
import { mapActions, mapGetters } from "vuex";
import MainLogo from "@/components/UI/MainLogo";
import TextLoadingSpinner from "@/components/UI/TextLoadingSpinner";
export default {
  name: "UserInfo",
  components: {
    MainLogo,
    TextLoadingSpinner,
  },
  data() {
    return {
      loading: false,
      errorMessage: "",
      form: {
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone_number: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
    userData() {
      return this.getUserData;
    },
    validationSchema() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return Joi.object({
        first_name: Joi.string().min(3).max(30).required().messages({
          'string.base': `First name should be a type of 'text'`,
          'string.empty': `First name cannot be an empty field`,
          'string.min': `First name should have a minimum length of {#limit}`,
          'string.max': `First name should have a maximum length of {#limit}`,
          'any.required': `First name is a required field`,
        }),
        last_name: Joi.string().min(3).max(30).required().messages({
          'string.base': `Last name should be a type of 'text'`,
          'string.empty': `Last name cannot be an empty field`,
          'string.min': `Last name should have a minimum length of {#limit}`,
          'string.max': `Last name should have a maximum length of {#limit}`,
          'any.required': `Last name is a required field`,
        }),
        address: Joi.string().min(3).max(30).required().messages({
          'string.base': `Address should be a type of 'text'`,
          'string.empty': `Address cannot be an empty field`,
          'string.min': `Address should have a minimum length of {#limit}`,
          'string.max': `Address should have a maximum length of {#limit}`,
          'any.required': `Address is a required field`,
        }),
        city: Joi.string().min(3).max(30).required().messages({
          'string.base': `City should be a type of 'text'`,
          'string.empty': `City cannot be an empty field`,
          'string.min': `City should have a minimum length of {#limit}`,
          'string.max': `City should have a maximum length of {#limit}`,
          'any.required': `City is a required field`,
        }),
        state: Joi.string().min(2).max(2).required().messages({
          'string.base': `State should be a type of 'text'`,
          'string.empty': `State cannot be an empty field`,
          'string.min': `State should have a minimum length of {#limit}`,
          'string.max': `State should have a maximum length of {#limit}`,
          'any.required': `State is a required field`,
        }),
        zip: Joi.string().min(5).max(5).required().messages({
          'string.base': `Zip should be a type of 'text'`,
          'string.empty': `Zip cannot be an empty field`,
          'string.min': `Zip should have a minimum length of {#limit}`,
          'string.max': `Zip should have a maximum length of {#limit}`,
          'any.required': `Zip is a required field`,
        }),
        phone_number: Joi.string().min(10).max(11).required().messages({
          'string.base': `Phone number should be a type of 'text'`,
          'string.empty': `Phone number cannot be an empty field`,
          'string.min': `Phone number should have a minimum length of {#limit}`,
          'string.max': `Phone number should have a maximum length of {#limit}`,
          'any.required': `Phone number is a required field`,
        }),
        email: Joi.string().pattern(emailRegex).required().messages({
          'string.base': `Email should be a type of 'text'`,
          'string.empty': `Email cannot be an empty field`,
          'string.email': `Email should be a valid email address`,
          'any.required': `Email is a required field`,
        }),
      });
    },
  },
  methods: {
    ...mapActions(["setUserDetails", "hydrateUserData", "changePersonalInfo"]),
    async formSubmit() {
      this.errorMessage = "";
      this.loading = true;
      const userDetails = {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        address: this.form.address,
        city: this.form.city,
        state: this.form.state,
        zip: this.form.zip,
        phone_number: this.form.phone_number,
        email: this.form.email,
      };
      const { error } = this.validationSchema.validate(userDetails);
      if (error) {
        this.loading = false;
        this.errorMessage = error.details[0].message;
        return;
      }
      const response = await this.setUserDetails(userDetails);
      if (response.status === 200) {
        await this.hydrateUserData();
        const user = this.getUserData;
        if (user.first_name) {
          this.loading = false;
          this.changePersonalInfo();
          this.$emit("goToNext");
          return;
        }
        this.loading = false;
        this.errorMessage = "There was an error saving your information. Please try again.";
        return;
      }
      this.errorMessage = "There was an error saving your information. Please try again.";
      this.loading = false;
    },
  },
  mounted() {
    this.$refs.first.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.user-info {
  width: 100%;
  height: 100%;
  @include flexCenter;
  .left-side {
    width: 50%;
    height: 100%;
    .logo-header {
      width: 100%;
      height: 50px;
    }
    .text-box-container {
      width: 100%;
      height: calc(100% - 50px);
      @include flexCenter;
      .text-box {
        width: 60%;
        @include flexCenterColumn;
        .title {
          width: 100%;
          margin-bottom: 1em;
        }
        p {
          @include flexCenterColumn;
          gap: 0.5em;
          font-size: 1.25em;
          span {
            font-size: 0.75em;
          }
        }
      }
    }
  }
  .right-side {
    width: 50%;
    height: 100%;
    @include flexCenterColumn;
    .form {
      width: 80%;
      height: 80%;
      @include flexCenterColumn;
      h1 {
        margin-bottom: 1em;
        font-size: 1.25em;
      }
      .error-message-container {
        width: 100%;
        height: 1em;
        @include flexCenter;
        p {
          color: $ResWarning;
          font-size: 0.75em;
        }
      }
      form {
        @include mainForm;
      }
    }
    .submit {
      width:80%;
      margin-top: 1em;
      @include flex(row, flex-end, center);
      button{
        @include mainButton;
        .spinner {
          margin-left: 0.25em;
        }
      }
    }
  }
}
</style>
```