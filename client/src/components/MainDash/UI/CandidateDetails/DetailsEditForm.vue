<template>
  <div class="edit-form">
    <div class="form">
      <div class="form-item">
        <label for="first_name">First Name:</label>
        <input ref="first" type="text" id="first_name" v-model="userData.first_name" />
      </div>
      <div class="form-item">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="userData.last_name" />
      </div>
      <div class="form-item">
        <label for="email">Contact Email:</label>
        <input type="email" id="email" v-model="userData.email" />
      </div>
      <div class="form-item">
        <label for="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" v-model="userData.phone_number" />
      </div>
      <div class="form-item">
        <label for="address">Street Address:</label>
        <input type="text" id="address" v-model="userData.address" />
      </div>
      <div class="form-item">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="userData.city" />
      </div>
      <div class="form-item">
        <label for="state">State:</label>
        <input type="text" id="state" v-model="userData.state" />
      </div>
      <div class="form-item">
        <label for="zip">Zip Code:</label>
        <input type="text" id="zip" v-model="userData.zip" />
      </div>
    </div>
    <div class="edit-button">
      <button @click="$emit('toggle')">Cancel</button>
      <button @click="saveNewData">Save</button>
    </div>
  </div>
</template>
<script>
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
    };
  },
  methods: {
    saveNewData() {
      console.log("Fix Me!");
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
        width: 30%;
        text-align: right;
      }
      input {
        width: 70%;
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
