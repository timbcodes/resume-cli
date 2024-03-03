<template>
  <div class="edit-form">
    <div class="form">
      <div class="form-item">
        <label for="first_name">First Name:</label>
        <input ref="first" type="text" id="first_name" v-model="submitData.first_name" />
      </div>
      <div class="form-item">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="submitData.last_name" />
      </div>
      <div class="form-item">
        <label for="email">Contact Email:</label>
        <input type="email" id="email" v-model="submitData.email" />
      </div>
      <div class="form-item">
        <label for="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" v-model="submitData.phone_number" />
      </div>
      <div class="form-item">
        <label for="address">Street Address:</label>
        <input type="text" id="address" v-model="submitData.address" />
      </div>
      <div class="form-item">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="submitData.city" />
      </div>
      <div class="form-item">
        <label for="state">State:</label>
        <input type="text" id="state" v-model="submitData.state" />
      </div>
      <div class="form-item">
        <label for="zip">Zip Code:</label>
        <input type="text" id="zip" v-model="submitData.zip" />
      </div>
    </div>
    <div class="edit-button">
      <button @click="$emit('toggle')">Cancel</button>
      <button @click="saveNewData">Save</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Joi from "joi";
export default {
  name: "DetailsEditForm",
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userData: this.currentUser,
      submitData: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      },
    };
  },
  computed: {
    userSchema() {
      return Joi.object({
        first_name: Joi.string().min(2).max(30).required(),
        last_name: Joi.string().min(2).max(30).required(),
        email: Joi.string().email({ tlds: false }).required(),
        phone_number: Joi.string().min(10).max(15).required(),
        address: Joi.string().min(5).max(50).required(),
        city: Joi.string().min(2).max(30).required(),
        state: Joi.string().min(2).max(30).required(),
        zip: Joi.string().min(5).max(10).required(),
      });
    },
  },
  methods: {
    ...mapActions(["editUserInfo"]),
    async saveNewData() {
      console.log(this.submitData);
      const { error } = this.userSchema.validate(this.submitData);
      if (error) {
        console.log(error);
        return;
      }
      const response = await this.editUserInfo(this.submitData);
      if (response) {
        this.$emit("toggle");
        this.$emit("rehydrate");
        return;
      }
      this.$emit("error", "There was an error saving your data. Please try again.");
    },
  },
  mounted() {
    this.$refs.first.focus();
    this.submitData.first_name = this.currentUser.first_name;
    this.submitData.last_name = this.currentUser.last_name;
    this.submitData.email = this.currentUser.email;
    this.submitData.phone_number = this.currentUser.phone_number;
    this.submitData.address = this.currentUser.address;
    this.submitData.city = this.currentUser.city;
    this.submitData.state = this.currentUser.state;
    this.submitData.zip = this.currentUser.zip;
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.edit-form {
  width: 90%;
  @include flexCenterColumn;
  gap: 1em;
  .form {
    width: 100%;
    @include flexCenterColumn;
    gap: 1em;
    .form-item {
      width: 100%;
      @include flexCenter;
      gap: 1em;
      label {
        width: 40%;
        text-align: right;
      }
      input {
        width: 60%;
        padding: 0.5em;
        border-radius: 5px;
        background-color: $ResSmoke;
        color: $ResCream;
        text-align: right;
        border: none;
        outline: none;
        &:focus {
          outline: none;
          border: 1px solid $ResPurple;
        }
      }
    }
  }
  .edit-button {
    width: 100%;
    @include flexCenter;
    gap: 1em;
    button {
      @include mainButton;
    }
  }
}
</style>
