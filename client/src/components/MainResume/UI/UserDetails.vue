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
        <input type="text" v-model="firstName" ref="first" />
        <input type="text" v-model="lastName" />
        <input type="text" v-model="address" />
        <input type="text" v-model="city" />
        <input type="text" v-model="state" />
        <input type="text" v-model="postalCode" />
        <input type="text" v-model="phoneNumber" />
        <input type="text" v-model="emailAddress" @keyup.enter="nextPage" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
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
  methods: {
    ...mapMutations(["setUserDetails"]),
    nextPage() {
      this.$emit("loading");
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.address === "" ||
        this.city === "" ||
        this.state === "" ||
        this.postalCode === "" ||
        this.phoneNumber === "" ||
        this.emailAddress === ""
      ) {
        this.$emit("message", "Please complete all fields");
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
