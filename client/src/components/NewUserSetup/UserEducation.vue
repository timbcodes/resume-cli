<template>
  <div class="user-education">
    <div class="left-side">
      <div class="logo-header">
        <MainLogo />
      </div>
      <div class="text-box-container">
        <div class="text-box">
          <h1 class="title">Tell Me About Your Education</h1>
          <p>
            Add your education in the form to the right.
          </p>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="form">
        <div class="error-message-container">
          <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
        <form class="education-form" @submit.prevent="formSubmit">
          <div class="education-fields" v-for="(education, index) in form.education" :key="index">
            <div class="left-side-form">
              <div class="top-box">
                <div class="input-box">
                  <label for="degree_awarded">Degree</label>
                  <select v-model="education.degree_awarded" required>
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Associates">Associates</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                </div>
                <div class="input-box">
                  <label for="school_name">School Name</label>
                  <input type="text" v-model="education.school_name" required>
                </div>
                <div class="input-box">
                  <label for="studies">Concentration</label>
                  <input type="text" v-model="education.studies" required>
                </div>
              </div>
              <div class="bottom-box">
                <div class="input-box">
                  <label for="start_year">Start Year</label>
                  <input type="text" v-model="education.start_year" required>
                </div>
                <div class="input-box">
                  <label for="finish_year">Finish Year</label>
                  <input type="text" v-model="education.finish_year" required>
                </div>
              </div>
            </div>
            <div class="right-side-form">
              <div class="buttons">
                <button type="button" @click="removeEducationField(index)" :disabled="index === 0">-</button>
                <button type="button" @click="addEducationField" :disabled="form.education.length >= 5">+</button>
              </div>
              <div class="input-box">
                <label for="graduated">Graduated</label>
                <input type="checkbox" v-model="education.graduated">
              </div>
            </div>
          </div>
          <div class="submit">
            <button type="submit">
              Submit
              <TextLoadingSpinner class="spinner" v-if="loading" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from 'joi';
import { mapActions, mapGetters } from 'vuex';
import MainLogo from '@/components/UI/MainLogo';
import TextLoadingSpinner from '@/components/UI/TextLoadingSpinner';

export default {
  name: 'UserEducation',
  components: {
    MainLogo,
    TextLoadingSpinner,
  },
  data() {
    return {
      loading: false,
      errorMessage: '',
      form: {
        education: [{
          degree_awarded: 'Bachelors',
          school_name: '',
          studies: '',
          start_year: '',
          finish_year: '',
          graduated: false,
        }],
      },
    };
  },
  computed: {
    ...mapGetters(['getUserData']),
  },
  methods: {
    ...mapActions(['setEducationInfo', 'hydrateUserData', 'changeEducation']),
    async formSubmit() {
      this.errorMessage = '';
      this.loading = true;
      const userDetails = {
        education: this.form.education,
      };
      const { error } = this.validationSchema.validate(userDetails);
      if (error) {
        this.loading = false;
        this.errorMessage = error.details[0].message;
        return;
      }
      const response = await this.setEducationInfo(userDetails);
      if (response.status === 200) {
        await this.hydrateUserData();
        if (this.userData.education.length > 0) {
          this.loading = false;
          this.changeEducation();
          this.$emit('goToNext');
          return;
        }
      }
      this.loading = false;
      this.errorMessage = 'There was an error saving your information. Please try again.';
    },
    addEducationField() {
      if (this.form.education.length < 5) {
        const newEducation = {
          degree_awarded: 'Bachelors',
          school_name: '',
          studies: '',
          start_year: '',
          finish_year: '',
          graduated: false,
        };
        this.form.education.push(newEducation);
      }
    },
    removeEducationField(index) {
      if (this.form.education.length > 1) {
        this.form.education.splice(index, 1);
      }
    },
  },
  validations: {
    education: Joi.array().items(Joi.object({
      degree_awarded: Joi.string().required(),
      school_name: Joi.string().required(),
      studies: Joi.string().required(),
      start_year: Joi.string().required(),
      finish_year: Joi.string().required(),
      graduated: Joi.boolean().required(),
    })).required(),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.user-education {
  width: 100%;
  height: 100%;
  @include flexCenter;
  .left-side {
    width: 40%;
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
          font-size: 1.25em;
        }
        p {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          font-size: 1em;
          span {
            font-size: 0.75em;
          }
        }
      }
    }
  }
  .right-side {
    width: 60%;
    height: 100%;
    .form {
      width: 100%;
      height: 100%;
      @include flexCenterColumn;
      .error-message-container {
        width: 100%;
        height: 1em;
        @include flexCenter;
        p {
          color: $ResWarning;
          font-size: 0.75em;
        }
      }
      .education-form {
        width: 100%;
        height: calc(100% - 1em);
        @include flex(column, flex-start, center);
        background-color: red;
        .education-fields {
          background-color: pink;
          width: 95%;
          height: auto;
          @include flex(row, flex-start, flex-start);
          .left-side-form {
            width: 90%;
            height: auto;
            background-color: orange;
            .top-box {

            }
          }
        }
        .submit {
          width: 100%;
          height: 50px;
          @include flex(row, flex-end, center);
          button {
            margin-right: 1em;
            @include mainButton;
          }
        }
      }
    }
  }
}
</style>
