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
            Add your education in the form to the right. You can add up to 3 different schools and degrees. You can choose not to display your education on your resume later on. <span>(If you don't have any formal education, just leave this blank and hit Submit)</span>
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
          <div class="form-container">
            <div class="education-fields" v-for="(education, index) in form.education" :key="index">
              <div class="left-side-form">
                <div class="top-box">
                  <div class="input-box-top">
                    <label for="school_name">School Name</label>
                    <input type="text" v-model="education.school_name">
                  </div>
                  <div class="input-box-top">
                    <label for="studies">Concentration</label>
                    <input type="text" v-model="education.studies">
                  </div>
                </div>
                <div class="bottom-box">
                  <div class="input-box-bottom">
                    <label for="start_year">Year Started</label>
                    <input type="text" v-model="education.start_year">
                  </div>
                  <div class="input-box-bottom">
                    <label for="finish_year">Year Finished</label>
                    <input type="text" v-model="education.finish_year">
                  </div>
                  <div class="input-box-bottom-location">
                    <label for="location">Location</label>
                    <input type="text" v-model="education.location">
                  </div>
                </div>
              </div>
              <div class="right-side-form">
                <div class="buttons">
                  <button type="button" @click="removeEducationField(index)" :disabled="index === 0">-</button>
                  <button type="button" @click="addEducationField" :disabled="form.education.length >= 3">+</button>
                </div>
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
          school_name: '',
          studies: '',
          start_year: '',
          finish_year: '',
          location: '',
        }],
      },
    };
  },
  computed: {
    ...mapGetters(['getUserData']),
    validationSchema() {
      return Joi.object({
        education: Joi.array().items(Joi.object({
          school_name: Joi.string().required(),
          studies: Joi.string().required(),
          start_year: Joi.string().required(),
          finish_year: Joi.string().required(),
          location: Joi.string().required(),
        })).required(),
      });
    },
    userData() {
      return this.getUserData;
    },
  },
  methods: {
    ...mapActions(['setEducationInfo', 'hydrateUserData', 'changeEducation']),
    async formSubmit() {
      this.errorMessage = '';
      this.loading = true;
      if (this.form.education[0].school_name === '' && this.form.education[0].studies === '' && this.form.education[0].start_year === '' && this.form.education[0].finish_year === '' && this.form.education[0].location === '') {
        await this.hydrateUserData();
        this.loading = false;
        this.changeEducation();
        this.$emit('goToNext');
        return;
      }
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
        if (this.userData.education) {
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
      if (this.form.education.length < 3) {
        const newEducation = {
          school_name: '',
          studies: '',
          start_year: '',
          finish_year: '',
          location: '',
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
    width: 30%;
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
    width: 70%;
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
        .form-container {
          width: 100%;
          height: calc(100% - 50px);
          @include flex(column, flex-start, center);
          gap: 1em;
          .education-fields {
            width: 100%;
            height: auto;
            @include flexCenter;
            gap: 2em;
            background-color: $ResGrey;
            border: 1px solid $ResBorder;
            border-radius: $ResRoundedEdges;
            padding: 0.5em;
            margin-right: 1.5em;
            .left-side-form {
              width: 100%;
              height: auto;
              @include flexCenterColumn;
              gap: 1em;
              .top-box {
                width: 100%;
                height: auto;
                @include flexCenter;
                gap: 1em;
                .input-box-top {
                  width: 100%;
                  @include flex(column, center, flex-start);
                  gap: 0.5em;
                  label {
                    font-size: 0.75em;
                  }
                  input {
                    width: 100%;
                    background-color: $ResSmoke;
                    outline: none;
                    border: 1px solid $ResBorder;
                    border-radius: $ResRoundedEdges;
                    padding: 0.25em;
                    color: $ResCream;
                    caret-color: $ResCream;
                    &:focus {
                      border: 1px solid $ResPurple;
                    }
                  }
                }
              }
              .bottom-box {
                width: 100%;
                height: auto;
                @include flexCenter;
                .input-box-bottom,
                .input-box-bottom-location {
                  width: 100%;
                  @include flex(column, center, flex-start);
                  gap: 0.5em;
                  label {
                    font-size: 0.75em;
                  }
                  input {
                    width: 8em;
                    background-color: $ResSmoke;
                    outline: none;
                    border: 1px solid $ResBorder;
                    border-radius: $ResRoundedEdges;
                    padding: 0.25em;
                    color: $ResCream;
                    caret-color: $ResCream;
                    &:focus {
                      border: 1px solid $ResPurple;
                    }
                  }
                }
                .input-box-bottom-location {
                  input {
                    width: 100%;
                  }
                }
              }
            }
            .right-side-form {
              width: 10%;
              height: auto;
              @include flexCenterColumn;
              gap: 1em;
              margin-right: 1em;
              .buttons {
                width: 100%;
                height: auto;
                @include flexCenter;
                gap: 0.5em;
                button {
                  @include mainButton;
                }
              }
            }
          }
        }
        .submit {
          width: 100%;
          height: 50px;
          @include flex(row, flex-end, center);
          gap: 0.5em;
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
