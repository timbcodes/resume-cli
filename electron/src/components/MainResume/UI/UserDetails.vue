<template>
  <div class="user-details">
    <div class="main-description">
      <p>Enter Your Contact Information</p>
    </div>
    <div class="form-container">
      <div class="left-side">
        <p>First Name*:</p>
        <p>Last Name*:</p>
        <p>Address*:</p>
        <p>City*:</p>
        <p>State*:</p>
        <p>Postal Code*:</p>
        <p>Phone Number*:</p>
        <p>Email Address*:</p>
      </div>
      <div class="right-side">
        <input
          type="text"
          v-model="firstName"
          ref="first"
          @keyup.enter="nextPage"
        />
        <input type="text" v-model="lastName" @keyup.enter="nextPage" />
        <input type="text" v-model="address" @keyup.enter="nextPage" />
        <input type="text" v-model="city" @keyup.enter="nextPage" />
        <input type="text" v-model="state" @keyup.enter="nextPage" />
        <input type="text" v-model="postalCode" @keyup.enter="nextPage" />
        <input type="text" v-model="phoneNumber" @keyup.enter="nextPage" />
        <input type="text" v-model="emailAddress" @keyup.enter="nextPage" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import Joi from "joi";
export default {
  name: "UserDetails",
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      phoneNumber: "",
      emailAddress: "",
    };
  },
  computed: {
    validationSchema() {
      return Joi.object({
        firstName: Joi.string().max(511).required().messages({
          "string.empty": `First Name is required`,
        }),
        lastName: Joi.string().max(511).required().messages({
          "string.empty": `Last Name is required`,
        }),
        address: Joi.string().max(511).required().messages({
          "string.empty": `Address is required`,
        }),
        city: Joi.string().max(511).required().messages({
          "string.empty": `City is required`,
        }),
        state: Joi.string().max(511).required().messages({
          "string.empty": `State is required`,
        }),
        postalCode: Joi.string().max(511).required().messages({
          "string.empty": `Postal Code is required`,
        }),
        phoneNumber: Joi.string().max(511).required().messages({
          "string.empty": `Phone Number is required`,
        }),
        emailAddress: Joi.string()
          .email({ tlds: { allow: false } })
          .max(511)
          .required()
          .messages({
            "string.empty": `Email Address is required`,
            "string.email": `Email Address must be a valid email`,
          }),
      });
    },
  },
  methods: {
    ...mapActions(["submitUserDetails"]),
    ...mapMutations(["setUserDetails"]),
    async nextPage() {
      this.$emit("loading");
      const { error } = this.validationSchema.validate({
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        city: this.city,
        state: this.state,
        postalCode: this.postalCode,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
      });
      if (error) {
        this.$emit("noLoading");
        this.$emit("message", error.message);
        this.$emit("noLoading");
        return;
      }
      this.setUserDetails({
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        city: this.city,
        state: this.state,
        postalCode: this.postalCode,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
      });
      await this.submitUserDetails();
      this.$emit("noLoading");
      this.$emit("next");
    },
  },
  mounted() {
    this.$refs.first.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.user-details {
  width: 100%;
  height: 100%;
  @include flexCenterColumn();
  .main-description {
    width: 100%;
    height: 50px;
    margin-bottom: 2rem;
    @include flexCenter();
  }
  .form-container {
    width: 100%;
    height: auto;
    gap: 2rem;
    @include flex(row, space-evenly, center);
    .left-side {
      width: 50%;
      height: auto;
      gap: 1.5rem;
      @include flex(column, center, flex-end);
    }
    .right-side {
      width: 400px;
      height: auto;
      gap: 1.25rem;
      @include flex(column, center, flex-end);
      input {
        padding: 0;
        margin: 0;
        width: 100%;
        border-bottom: 1px dotted $ResGreen;
      }
    }
  }
}
</style>
