<template>
  <div class="user-info">
    <div class="left-side">
      <div class="logo-header">
        <MainLogo />
      </div>
      <div class="text-box-container">
        <div class="text-box">
          <h1 class="title">Tell Me About Your Career</h1>
          <p>
            I have a few questions about your career. I'll use these answers to make sure your resume and cover letters match the jobs you're applying for. I'll also use this information to help you determine if a potential job is a good fit for you. <span>(These answers can be changed at any time, and will not prevent you from applying for roles outside of your chosen field or experience level.)</span>
          </p>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="form">
        <div class="error-message-container">
          <p v-if="errorMessage">{{errorMessage}}</p>
        </div>
        <form>
          <div class="input-box">
            <label for="job_title">What is your current job title?</label>
            <input ref="title" @keyup.enter.prevent="formSubmit" type="text" name="job_title" v-model="form.job_title" required>
          </div>
          <div class="input-box">
            <label for="title_search">What is the title of the most common position that you're searching for?</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="title_search" v-model="form.title_search" required>
          </div>
          <div class="input-box">
            <label for="career_years">How many years have you been in your field?</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="career_years" v-model="form.career_years" required>
          </div>
          <div class="input-box">
            <label for="career_industry">What industry do you typically work in?</label>
            <input @keyup.enter.prevent="formSubmit" type="text" name="career_industry" v-model="form.career_industry" required>
          </div>
          <div class="input-box">
            <label for="previous_jobs">How many previous jobs would you like to include on your resume?</label>
            <select name="previous_jobs" v-model="form.previous_jobs" required>
              <option v-for="num in 15" :key="num" :value="num">{{ num }}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="submit">
        <button @click="formSubmit">
          Submit
          <TextLoadingSpinner class="spinner" v-if="loading" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Joi from 'joi';
import { mapActions, mapGetters } from "vuex";
import MainLogo from "@/components/UI/MainLogo";
import TextLoadingSpinner from "@/components/UI/TextLoadingSpinner";
export default {
  name: "AdditionalInfo",
  components: {
    MainLogo,
    TextLoadingSpinner,
  },
  data() {
    return {
      loading: false,
      errorMessage: "",
      form: {
        job_title: "",
        title_search: "",
        career_years: "",
        career_industry: "",
        previous_jobs: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
    userData() {
      return this.getUserData;
    },
    validationSchema() {
      return Joi.object({
        job_title: Joi.string().required().messages({
          'any.required': `Job Title is a required field`,
        }),
        title_search: Joi.string().required().messages({
          'any.required': `Title Search is a required field`,
        }),
        career_years: Joi.number().integer().required().messages({
          'number.base': `Career Years should be a number`,
          'number.integer': `Career Years should be an integer`,
          'any.required': `Career Years is a required field`,
        }),
        career_industry: Joi.string().required().messages({
          'any.required': `Career Industry is a required field`,
        }),
        previous_jobs: Joi.number().integer().min(1).max(15).required().messages({
          'number.base': `Previous Jobs should be a number`,
          'number.integer': `Previous Jobs should be an integer`,
          'number.min': `Previous Jobs should have a minimum value of {#limit}`,
          'number.max': `Previous Jobs should have a maximum value of {#limit}`,
          'any.required': `Previous Jobs is a required field`,
        }),
      });
    },
  },
  methods: {
    ...mapActions(["setAdditionalInfo", "hydrateUserData", "changeAdditionalInfo"]),
    async formSubmit() {
      this.errorMessage = "";
      this.loading = true;
      const userDetails = {
        job_title: this.form.job_title,
        title_search: this.form.title_search,
        career_years: this.form.career_years,
        career_industry: this.form.career_industry,
        previous_jobs: this.form.previous_jobs,
      };
      const { error } = this.validationSchema.validate(userDetails);
      if (error) {
        this.loading = false;
        this.errorMessage = error.details[0].message;
        return;
      }
      const response = await this.setAdditionalInfo(userDetails);
      if (response.status === 200) {
        await this.hydrateUserData();
        const user = this.getUserData;
        if (user.job_title) {
          this.loading = false;
          this.changeAdditionalInfo();
          this.$emit("goToNext");
          return;
        }
        this.loading = false;
        this.errorMessage = "There was an error saving your information. Please try again.";
        return;
      }
      this.errorMessage = "There was an error saving your information. Please try again.";
      this.loading = false;
    },
  },
  mounted() {
    this.$refs.title.focus();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.user-info {
  width: 100%;
  height: 100%;
  @include flexCenter;
  .left-side {
    width: 50%;
    height: 100%;
    .logo-header {
      width: 100%;
      height: 50px;
    }
    .text-box-container {
      width: 100%;
      height: calc(100% - 50px);
      @include flexCenter;
      .text-box {
        width: 60%;
        @include flexCenterColumn;
        .title {
          width: 100%;
          margin-bottom: 1em;
        }
        p {
          @include flexCenterColumn;
          gap: 0.5em;
          font-size: 1.25em;
          span {
            font-size: 0.75em;
          }
        }
      }
    }
  }
  .right-side {
    width: 50%;
    height: 100%;
    @include flexCenterColumn;
    .form {
      width: 80%;
      height: 80%;
      @include flexCenterColumn;
      h1 {
        margin-bottom: 1em;
        font-size: 1.25em;
      }
      .error-message-container {
        width: 100%;
        height: 1em;
        @include flexCenter;
        p {
          color: $ResWarning;
          font-size: 0.75em;
        }
      }
      form {
        @include mainForm;
      }
      .input-box {
        @include flexCenterColumn;
        label {
          width: 100%;
          @include flex(row, flex-start, center);
          margin-bottom: 0.5em;
        }
        input,
        select {
          @include mainForm;
        }
        select {
          background-color: $ResSmoke;
          color: $ResCream;
          width: 50px;
          &:focus {
            border: 1px solid $ResPurple;
          }
        }
      }
    }
    .submit {
      width: 80%;
      margin-top: 1em;
      @include flex(row, flex-end, center);
      button {
        @include mainButton;
        .spinner {
          margin-left: 0.25em;
        }
      }
    }
  }
}
</style>
