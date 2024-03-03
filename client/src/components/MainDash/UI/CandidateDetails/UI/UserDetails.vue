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
    <div class="edit-details" v-if="edit">
      <div class="edit-item-container">
        <span class="edit-title">Candidate Details</span>
        <div class="edit-details-item">
          <span class="edit-label">Current Job Title:</span>
          <input ref="current" type="text" class="edit-value" id="current_job" v-model="currentUser.job_title" >
        </div>
        <div class="edit-details-item">
          <span class="edit-label">The Job I'm Looking for:</span>
          <input type="text" class="edit-value" id="title_search" v-model="currentUser.title_search" />
        </div>
        <div class="edit-details-item">
          <span class="edit-label">How Many Years of Experience I Have:</span>
          <input type="text" class="edit-value" id="career_years" v-model="currentUser.career_years" />
        </div>
        <div class="edit-details-item">
          <span class="edit-label">The Industry I'm In:</span>
          <input type="text" class="edit-value" id="career_industry" v-model="currentUser.career_industry" />
        </div>
        <div class="edit-details-item edit-summary-item">
          <span class="edit-label">Here's a Brief Summary of My Experience:</span>
          <textarea ref="summary" v-model="currentUser.brief_summary" rows="5" cols="50"></textarea>
        </div>
      </div>
    </div>
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
  .display-details {
    width: 100%;
    height: 100%;
    @include flexCenterColumn;
    gap: 1em;
    .item-container {
      width: 100%;
      height: 100%;
      @include flexCenterColumn;
      gap: 2em;
      .title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 2em;
      }
      .details-item {
        width: 100%;
        @include flex(row, space-between, center);
        gap: 1em;
        .label {
          font-weight: bold;
        }
      }
      .summary-item {
        margin-top: 2em;
        @include flexCenterColumn;
      }
    }
  }
  .edit-details {
    width: 100%;
    @include flexCenterColumn;
    gap: 1em;
    .edit-item-container {
      width: 100%;
      height: 100%;
      @include flexCenterColumn;
      gap: 2em;
      .edit-title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 2em;
      }
      .edit-details-item {
        width: 100%;
        @include flex(row, space-between, center);
        gap: 1em;
        .edit-label {
          font-weight: bold;
        }
        .edit-value {
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
      .edit-summary-item {
        margin-top: 2em;
        @include flexCenterColumn;
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
        textarea {
          width: 60%;
          padding: 0.5em;
          border-radius: 5px;
          background-color: $ResSmoke;
          color: $ResCream;
          text-align: left;
          border: none;
          outline: none;
          resize: none;
          &:focus {
            outline: none;
            border: 1px solid $ResPurple;
          }
        }
      }
    }
  }
  .edit-button {
    width: 100%;
    height: 3em;
    @include flex(row, flex-end, center);
    button {
      @include mainButton;
    }
  }
}
</style>