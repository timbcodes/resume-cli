<template>
  <div>
    <div class="job-title">
      <p>
        Fill out the following information to help me build you a better resume:
      </p>
    </div>
    <div class="job-container">
      <div class="title">
        <p>What is Your Current Job Title?..........................</p>
        <input
          type="text"
          v-model="jobTitle"
          ref="jobTitle"
          @keypress.enter="validateAndSubmit"
        />
      </div>
      <div class="looking-for">
        <p>What Job Title Are You Looking For?......................</p>
        <input
          type="text"
          v-model="lookingFor"
          ref="lookingFor"
          @keypress.enter="validateAndSubmit"
        />
      </div>
      <div class="industry">
        <p>What Industry Are You In?................................</p>
        <input
          type="text"
          v-model="industry"
          ref="industry"
          @keypress.enter="validateAndSubmit"
        />
      </div>
      <div class="career-years">
        <p>How Many Years Have You Been in Your Career?.............</p>
        <input
          type="text"
          v-model="careerYears"
          ref="careerYears"
          @keypress.enter="validateAndSubmit"
        />
      </div>
      <div class="how-many-jobs">
        <p>How Many Jobs do You Want to Include in Your Resume?.....</p>
        <input
          type="text"
          v-model="howManyJobs"
          ref="howManyJobs"
          @keypress.enter="validateAndSubmit"
        />
      </div>
      <div class="brief-summary">
        <div class="text-area">
          <p>Give a Brief Summary of Your Career History:</p>
          <textarea
            ref="briefSummary"
            v-model.lazy="briefSummary"
            @input="handleInput"
            @keypress.enter.prevent="validateAndSubmit"
          ></textarea>
        </div>
        <div class="char-countdown">
          <p>{{ startingChars }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import Joi from "joi";
export default {
  name: "JobTitle",
  data() {
    return {
      jobTitle: "",
      lookingFor: "",
      careerYears: "",
      industry: "",
      howManyJobs: "",
      briefSummary: "",
      startingChars: 300,
    };
  },
  computed: {
    isCharLimitReached() {
      return this.briefSummary.length > 300;
    },
    validationSchema() {
      return Joi.object({
        jobTitle: Joi.string().max(255).required().messages({
          "string.empty": `Job Title is required`,
        }),
        lookingFor: Joi.string().max(255).required().messages({
          "string.empty": `Looking For is required`,
        }),
        careerYears: Joi.string().max(255).required().messages({
          "string.empty": `Career Years is required`,
        }),
        industry: Joi.string().max(255).required().messages({
          "string.empty": `Industry is required`,
        }),
        howManyJobs: Joi.string().max(255).required().messages({
          "string.empty": `How Many Jobs is required`,
        }),
        briefSummary: Joi.string().max(300).required().messages({
          "string.empty": `Brief Summary is required`,
        }),
      });
    },
  },
  watch: {
    briefSummary() {
      this.countDownChars();
    },
  },
  methods: {
    ...mapActions(["submitAdditionalInfo"]),
    ...mapMutations(["setAdditionalDetails"]),
    countDownChars() {
      this.startingChars = 300 - this.briefSummary.length;
    },
    handleInput(event) {
      const maxLength = 300;
      if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.substr(0, maxLength);
      }
      this.briefSummary = event.target.value;
      this.startingChars = maxLength - this.briefSummary.length;
    },
    async validateAndSubmit() {
      this.$emit("loading");
      const { error } = this.validationSchema.validate({
        jobTitle: this.jobTitle,
        lookingFor: this.lookingFor,
        careerYears: this.careerYears,
        industry: this.industry,
        howManyJobs: this.howManyJobs,
        briefSummary: this.briefSummary,
      });
      if (error) {
        this.$emit("noLoading");
        this.$emit("message", error.details[0].message);
        return;
      }
      this.careerYears = parseInt(this.careerYears);
      this.howManyJobs = parseInt(this.howManyJobs);
      if (this.howManyJobs > 15) {
        this.$emit("noLoading");
        this.$emit("message", "Previous Number of Jobs Must be Less Than 15");
        return;
      }
      this.setAdditionalDetails({
        jobTitle: this.jobTitle,
        lookingFor: this.lookingFor,
        careerYears: this.careerYears,
        industry: this.industry,
        howManyJobs: this.howManyJobs,
        briefSummary: this.briefSummary,
      });
      const results = await this.submitAdditionalInfo();
      if (results) {
        this.$emit("noLoading");
        this.$emit("nextPage");
        return;
      }
      this.$emit("message", "Something Went Wrong On Our End");
      this.$emit("noLoading");
    },
  },
  mounted() {
    this.$refs.jobTitle.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.job-title {
  margin-bottom: 5em;
  @include flexCenter();
}
.job-container {
  width: 100%;
  height: auto;
  @include flexCenterColumn();
  gap: 2em;
  .title,
  .looking-for,
  .career-years,
  .career-level,
  .industry,
  .how-many-jobs {
    width: 100%;
    height: auto;
    @include flexCenter();
    p {
      margin: 0;
      padding: 0;
      color: $ResGreen;
    }
    input {
      width: 20em;
      border-bottom: 1px dotted $ResGreen;
      padding: 0 0.5em;
      &:focus {
        outline: none;
      }
    }
  }
  .how-many-jobs,
  .career-years {
    @include flex(row, flex-start, center);
    input {
      width: 5em;
    }
  }
  .brief-summary {
    width: 100%;
    height: auto;
    gap: 0.25em;
    @include flexCenterColumn();
    .text-area {
      width: 100%;
      height: auto;
      gap: 1em;
      textarea::-webkit-scrollbar {
        display: none;
      }
      @include flexCenter();
      p {
        margin: 0;
        padding: 0;
        color: $ResGreen;
      }
      textarea {
        width: 100%;
        height: 100px;
        border: 1px solid $ResGreen;
        padding: 0.5em;
        &:focus {
          outline: none;
        }
        resize: none;
      }
    }
    .char-countdown {
      width: 100%;
      height: auto;
      @include flex(row, flex-end, center);
      p {
        margin: 0;
        padding: 0;
        color: $ResGreen;
      }
    }
  }
}
</style>
