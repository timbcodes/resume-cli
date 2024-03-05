<template>
  <div class="user-education">
    <h3 class="user-education-title">Education</h3>
    <div class="warning-container">
      <p v-if="error">There was an error saving your data</p>
    </div>
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
          <button @click="saveNewData">Save <TextLoadingSpinner v-if="loading" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import TextLoadingSpinner from "@/components/UI/TextLoadingSpinner.vue";
export default {
  name: "UserEducation",
  components: {
    TextLoadingSpinner,
  },
  props: {
    currentUser: Object,
  },
  data() {
    return {
      error: false,
      edit: false,
      loading: false,
      education: this.currentUser.education,
    };
  },
  methods: {
    ...mapActions(["setEducationInfo"]),
    async saveNewData() {
      this.loading = true;
      const data = {
        education: this.education,
      };
      const results = await this.setEducationInfo(data);
      if (results.status === 200) {
        this.loading = false;
        this.edit = false;
        return;
      }
      this.loading = false;
      this.error = true;
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
  .warning-container {
    width: 100%;
    height: 0.75em;
    @include flexCenter;
    p {
      font-size: 0.75em;
      color: $ResWarning;
    }
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
          gap: 0.5em;
        }
      }
    }
  }
}
</style>
