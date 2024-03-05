<template>
  <div class="user-education">
    <h3 class="user-education-title">Education</h3>
    <div class="user-education-content" v-if="!edit">
      <div class="user-education-item-container">
        <div class="user-education-content-item" v-for="(edu, index) in education" :key="index">
          <div class="school-number">
            <p>School Number:</p>
            <p>{{ index + 1 }}</p>
          </div>
          <div class="school-container">
            <p>School Name:</p>
            <p>{{ edu.school_name }}</p>
          </div>
          <div class="field-container">
            <p>Field of Study:</p>
            <p>{{ edu.studies }}</p>
          </div>
          <div class="location-container">
            <p>Location:</p>
            <p>{{ edu.location }}</p>
          </div>
          <div class="start-date-container">
            <p>Start Date:</p>
            <p>{{ edu.start_year }}</p>
          </div>
          <div class="end-date-container">
            <p>End Date:</p>
            <p>{{ edu.finish_year }}</p>
          </div>
        </div>
      </div>
      <div class="edit-button">
        <button @click="edit = true">Edit</button>
      </div>
    </div>
    <div class="edit-details" v-if="edit">
      <div class="edit-item-container">
        <div class="edit-details-item-container">
          <div class="edit-details-item-loop" v-for="(edu, index) in education" :key="index">
            <div class="edit-details-item">
              <span class="edit-label">School Name:</span>
              <input type="text" class="edit-value" v-model="edu.school_name">
            </div>
            <div class="edit-details-item">
              <span class="edit-label">Field of Study:</span>
              <input type="text" class="edit-value" v-model="edu.studies">
            </div>
            <div class="edit-details-item">
              <span class="edit-label">Location:</span>
              <input type="text" class="edit-value" v-model="edu.location">
            </div>
            <div class="edit-details-item">
              <span class="edit-label">Start Date:</span>
              <input type="text" class="edit-value" v-model="edu.start_year">
            </div>
            <div class="edit-details-item">
              <span class="edit-label">End Date:</span>
              <input type="text" class="edit-value" v-model="edu.finish_year">
            </div>
          </div>
        </div>
        <div class="edit-button">
          <button @click="edit = false">Cancel</button>
          <button @click="saveNewData">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEducation",
  props: {
    currentUser: Object,
  },
  data() {
    return {
      edit: true,
      education: this.currentUser.education,
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
.user-education {
  width: 100%;
  height: 100%;
  @include flexCenterColumn;
  gap: 1em;
  .user-education-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
  }
  .user-education-content {
    width: 100%;
    height: calc(100% - 3em);
    @include flexCenterColumn;
    gap: 1em;
    .user-education-item-container {
      width: 100%;
      height: 100%;
      @include flex(column, flex-start, center);
      gap: 1em;
      .user-education-content-item {
        width: 80%;
        @include flexCenterColumn;
        gap: 1em;
        .school-number {
          width: 100%;
          @include flexCenter;
          gap: 1em;
          p {
          }
        }
        .school-container,
        .field-container,
        .location-container,
        .start-date-container,
        .end-date-container {
          width: 100%;
          @include flex(row, space-between, center);
          gap: 0.5em;
          p {
            font-size: 0.75em;
          }
        }
      }
    }
    .edit-button {
      width: 100%;
      height: 3em;
      gap: 1em;
      @include flex(row, flex-end, center);
      button {
        @include mainButton;
      }
    }
  }
  .edit-details {
    width: 100%;
    height: 100%;
    @include flexCenterColumn;
    gap: 1em;
    .edit-item-container {
      width: 100%;
      height: 100%;
      @include flexCenterColumn;
      gap: 2em;
      .edit-details-item-container {
        width: 100%;
        height: calc(100% - 3em);
        @include flexCenterColumn;
        gap: 1em;
        .edit-details-item-loop {
          width: 100%;
          height: auto;
          @include flexCenterColumn;
          .edit-details-item {
            width: 80%;
            @include flex(row, space-between, center);
            .edit-label {
              font-weight: bold;
              font-size: 0.8em;
            }
            .edit-value {
              width: 30%;
              padding: 0.25em;
              margin: 0.25em 0;
              font-size: 0.8em;
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
      }
      .edit-button {
        width: 100%;
        height: 3em;
        gap: 1em;
        @include flex(row, flex-end, center);
        button {
          @include mainButton;
        }
      }
    }
  }
}
</style>
