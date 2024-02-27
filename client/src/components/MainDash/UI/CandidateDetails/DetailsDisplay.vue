<template>
  <div class="display-container">
    <div class="form">
      <div class="display-item">
        <span>First Name:</span>
        <span>{{ userData.first_name }}</span>
      </div>
      <div class="display-item">
        <span>Last Name:</span>
        <span>{{ userData.last_name }}</span>
      </div>
      <div class="display-item">
        <span>Contact Email:</span>
        <span>{{ userData.email }}</span>
      </div>
      <div class="display-item">
        <span>Phone Number:</span>
        <span>{{ userData.phone_number }}</span>
      </div>
      <div class="display-item">
        <span>Street Address:</span>
        <span>{{ userData.address }}</span>
      </div>
      <div class="display-item">
        <span>City:</span>
        <span>{{ userData.city }}</span>
      </div>
      <div class="display-item">
        <span>State:</span>
        <span>{{ userData.state }}</span>
      </div>
      <div class="display-item">
        <span>Zip Code:</span>
        <span>{{ userData.zip }}</span>
      </div>
    </div>
    <div class="edit-button">
      <button @click="$emit('toggle')">Edit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsDisplay",
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
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.display-container {
  width: 80%;
  height: 100%;
  @include flexCenterColumn;
  gap: 2em;
  .form {
    width: 100%;
    height: auto;
    @include flexCenterColumn;
    gap: 2em;
    .display-item {
      border-bottom: 1px solid $ResBorderLight;
      width: 100%;
      @include flex(row, space-between, center);
      gap: 2em;
      span {
        font-size: 1em;
        color: $ResCream;
      }
    }
  }
  .edit-button{
    width: 100%;
    @include flexCenter;
    button {
      @include mainButton;
    }
  }
}
</style>
