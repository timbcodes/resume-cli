<template>
  <div>
    <div class="main-job-container">
      <div class="upper-info-section">
        <div class="upper-info-title">
          <p v-if="currentJobNumber == 1 ? true : false">
            Enter the Details from Your Most Recent Job
          </p>
          <p v-else>Enter the Details from Your Next Most Recent Job</p>
        </div>
        <div class="job-info-section">
          <p>Company Information:</p>
          <div class="company-name">
            <label for="company-name">Company Name......................</label>
            <input
              type="text"
              id="company-name"
              v-model="companyName"
              ref="companyName"
              @keyup.enter="submitJobDetails"
            />
          </div>
          <div class="job-city">
            <label for="job-city">City..............................</label>
            <input
              type="text"
              id="job-city"
              v-model="jobCity"
              @keyup.enter="submitJobDetails"
            />
          </div>
          <div class="job-state">
            <label for="job-state">State.............................</label>
            <input
              type="text"
              id="job-state"
              v-model="jobState"
              @keyup.enter="submitJobDetails"
            />
          </div>
        </div>
      </div>
      <div class="middle-info-section">
        <p>Job Information:</p>
        <div class="job-title">
          <label for="job-title">Job Title.........................</label>
          <input
            type="text"
            id="job-title"
            v-model="jobTitle"
            @keyup.enter="submitJobDetails"
          />
        </div>
        <div class="start-date">
          <label for="start-date">Start Date........................</label>
          <input
            type="text"
            id="start-date"
            v-model="startDate"
            @keyup.enter="submitJobDetails"
          />
        </div>
        <div class="end-date">
          <label for="end-date">End Date.........</label>
          <p class="extra-instruct">
            ("Current" or "Present" if still employed)
          </p>
          <input
            type="text"
            id="end-date"
            v-model="endDate"
            @keyup.enter="submitJobDetails"
          />
        </div>
      </div>
      <div class="lower-info-section">
        <div class="job-description">
          <label for="job-description"
            >Enter the details of this job in paragraph or bullet format. Use
            "-" hyphens for bullet points</label
          >
          <textarea
            id="job-description"
            v-model="jobDescription"
            @keyup.enter.prevent="submitJobDetails"
          ></textarea>
        </div>
        <div class="skills-used">
          <label for="skills-used"
            >Enter the skills you used in this job, separated by commas</label
          >
          <textarea
            id="skills-used"
            v-model="skillsUsed"
            @keyup.enter.prevent="submitJobDetails"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "JobDetails",
  data() {
    return {
      companyName: "",
      jobCity: "",
      jobState: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      skillsUsed: "",
    };
  },
  computed: {
    ...mapGetters(["getJobNumber"]),
    currentJobNumber() {
      return this.getJobNumber;
    },
  },
  mounted() {
    this.$refs.companyName.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-job-container {
  width: 100%;
  height: 100%;
  @include flexCenter();
  @include flex(column, space-evenly, flex-start);
  gap: 2em;
  .upper-info-section {
    width: 100%;
    @include flex(column, space-evenly, flex-start);
    .upper-info-title {
      width: 100%;
      margin-bottom: 3em;
      @include flexCenter();
    }
    .job-info-section {
      width: 100%;
      @include flex(column, space-evenly, flex-start);
      gap: 1em;
      .company-name,
      .job-city,
      .job-state {
        width: 100%;
        @include flex(row, space-evenly, flex-start);
        input {
          width: 50%;
          border-bottom: 1px dotted $ResGreen;
        }
      }
    }
  }
  .middle-info-section {
    width: 100%;
    @include flex(column, space-evenly, flex-start);
    gap: 1em;
    .job-title,
    .start-date,
    .end-date {
      width: 100%;
      @include flex(row, space-evenly, flex-start);
      input {
        border-bottom: 1px dotted $ResGreen;
      }
    }
  }
  .lower-info-section {
    width: 100%;
    @include flex(column, space-evenly, flex-start);
    gap: 1em;
    .job-description,
    .skills-used {
      width: 100%;
      @include flex(column, space-evenly, flex-start);
      label {
        margin: 1em 0;
      }
      textarea {
        resize: none;
        width: 100%;
        height: 10em;
        border: 1px solid $ResGreen;
      }
    }
    .skills-used {
      textarea {
        height: 5em;
      }
    }
  }
}
</style>
