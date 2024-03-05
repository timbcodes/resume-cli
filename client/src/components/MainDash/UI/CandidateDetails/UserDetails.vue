<template>
  <div class="main-container">
    <div class="display-details" v-if="!edit">
      <div class="item-container">
        <span class="title">Candidate Details</span>
        <div class="details-item">
          <span class="label">Current Job Title:</span>
          <span class="value">{{ user.job_title }}</span>
        </div>
        <div class="details-item">
          <span class="label">The Job I'm Looking for:</span>
          <span class="value">{{ user.title_search }}</span>
        </div>
        <div class="details-item">
          <span class="label">How Many Years of Experience I Have:</span>
          <span class="value">{{ user.career_years }}</span>
        </div>
        <div class="details-item">
          <span class="label">The Industry I'm In:</span>
          <span class="value">{{ user.career_industry }}</span>
        </div>
        <div class="details-item summary-item">
          <span class="label">Here's a Brief Summary of My Experience:</span>
          <span class="value">{{ user.brief_summary }}</span>
        </div>
      </div>
      <div class="edit-button">
        <button @click="edit = true">Edit</button>
      </div>
    </div>
    <div class="edit-details" v-if="edit">
      <div class="edit-item-container">
        <span class="edit-title">Candidate Details</span>
        <div class="warning-container">
          <p v-if="error">There was an error saving your data</p>
        </div>
        <div class="edit-detail-item-container">
          <div class="edit-details-item">
            <span class="edit-label">Current Job Title:</span>
            <input ref="current" type="text" class="edit-value" id="current_job" v-model="user.job_title" >
          </div>
          <div class="edit-details-item">
            <span class="edit-label">The Job I'm Looking for:</span>
            <input type="text" class="edit-value" id="title_search" v-model="user.title_search" />
          </div>
          <div class="edit-details-item">
            <span class="edit-label">How Many Years of Experience I Have:</span>
            <input type="text" class="edit-value" id="career_years" v-model="user.career_years" />
          </div>
          <div class="edit-details-item">
            <span class="edit-label">The Industry I'm In:</span>
            <input type="text" class="edit-value" id="career_industry" v-model="user.career_industry" />
          </div>
          <div class="edit-details-item edit-summary-item">
            <span class="edit-label">Here's a Brief Summary of My Experience:</span>
            <textarea ref="summary" v-model="user.brief_summary" rows="5" cols="50"></textarea>
          </div>
        </div>
        <div class="edit-button">
          <button @click="edit = false">Cancel</button>
          <button @click="saveNewData">Save<TextLoadingSpinner v-if="loading" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import TextLoadingSpinner from "@/components/UI/TextLoadingSpinner.vue";
export default {
  name: "UserDetails",
  components: {
    TextLoadingSpinner,
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
      error: false,
      loading: false,
      user: this.currentUser,
    };
  },
  methods: {
    ...mapActions(["setAdditionalInfo", "setSummaryInfo"]),
    async saveNewData() {
      this.loading = true;
      const data = this.user;
      const res1 = await this.setAdditionalInfo(data);
      const res2 = await this.setSummaryInfo(data);
      if (res1.status === 200 && res2.status === 200) {
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
      gap: 1em;
      .edit-title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 2em;
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
      .edit-detail-item-container {
        height: 100%;
        width: 100%;
        @include flexCenterColumn;
        gap: 1em;
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
</style>