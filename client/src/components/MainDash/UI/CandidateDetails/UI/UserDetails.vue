<template>
  <div class="main-container">
    <div class="display-details" v-if="!edit">
      <div class="item-container">
        <span class="title">Candidate Details</span>
        <div class="details-item">
          <span class="label">Current Job Title:</span>
          <span class="value">{{ currentUser.job_title }}</span>
        </div>
        <div class="details-item">
          <span class="label">The Job I'm Looking for:</span>
          <span class="value">{{ currentUser.title_search }}</span>
        </div>
        <div class="details-item">
          <span class="label">How Many Years of Experience I Have:</span>
          <span class="value">{{ currentUser.career_years }}</span>
        </div>
        <div class="details-item">
          <span class="label">The Industry I'm In:</span>
          <span class="value">{{ currentUser.career_industry }}</span>
        </div>
        <div class="details-item summary-item">
          <span class="label">Here's a Brief Summary of My Experience:</span>
          <span class="value">{{ currentUser.brief_summary }}</span>
        </div>
      </div>
      <div class="edit-button">
        <button @click="edit = true">Edit</button>
      </div>
    </div>
    <div class="edit-details" v-if="edit"></div>
  </div>
</template>
<script>
export default {
  name: "UserDetails",
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    saveNewData() {
      console.log("Fix Me!");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.main-container {
  width: 100%;
  height: 100%;
  @include flexCenterColumn;
  gap: 1em;
  .edit-button {
    width: 100%;
    height: 3em;
    @include flex(row, flex-end, center);
    gap: 1em;
    button {
      @include mainButton;
    }
  }
  .edit-details {
    width: 100%;
    @include flexCenterColumn;
    gap: 1em;
  }
}
</style>