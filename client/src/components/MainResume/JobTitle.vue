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
        <input type="text" v-model="jobTitle" ref="jobTitle" />
      </div>
      <div class="looking-for">
        <p>What Job Title Are You Looking For?......................</p>
        <input type="text" v-model="lookingFor" ref="lookingFor" />
      </div>
      <div class="career-years">
        <p>How Many Years Have You Been in Your Career?.............</p>
        <input type="text" v-model="careerYears" ref="careerYears" />
      </div>
      <div class="career-level">
        <p>What is Your Career Level?...............................</p>
        <input type="text" v-model="careerLevel" ref="careerLevel" />
      </div>
      <div class="industry">
        <p>What Industry Are You In?................................</p>
        <input type="text" v-model="industry" ref="industry" />
      </div>
      <div class="how-many-jobs">
        <p>How Many Jobs do You Want to Include on Your Resume?.....</p>
        <input type="text" v-model="howManyJobs" ref="howManyJobs" />
      </div>
      <div class="breif-summary">
        <div class="text-area">
          <p>Give a Brief Summary of Your Career History:</p>
          <textarea
            ref="breifSummary"
            v-model.lazy="breifSummary"
            @input="handleInput"
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
export default {
  name: "JobTitle",
  data() {
    return {
      jobTitle: "",
      lookingFor: "",
      careerYears: "",
      careerLevel: "",
      industry: "",
      howManyJobs: "",
      breifSummary: "",
      startingChars: 300,
    };
  },
  computed: {
    isCharLimitReached() {
      return this.breifSummary.length > 300;
    },
  },
  watch: {
    breifSummary() {
      this.countDownChars();
    },
  },
  methods: {
    countDownChars() {
      this.startingChars = 300 - this.breifSummary.length;
    },
    handleInput(event) {
      const maxLength = 300;
      if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.substr(0, maxLength);
      }
      this.breifSummary = event.target.value;
      this.startingChars = maxLength - this.breifSummary.length;
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
      border-bottom: 1px solid $ResGreen;
      padding: 0 0.5em;
      &:focus {
        outline: none;
      }
    }
  }
  .breif-summary {
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
