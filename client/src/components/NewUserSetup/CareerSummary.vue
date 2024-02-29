<template>
  <div class="career-summary">
    <div class="left-side">
      <div class="logo-header">
        <MainLogo />
      </div>
      <div class="text-box-container">
        <div class="text-box">
          <h1 class="title">Tell me a little about yourself</h1>
          <p>
            Describe in detail a paragraph or two about what you do and what you specialize in. Be descriptive!
            <span>(Example: "I'm a full-stack web developer with 15 years of experience using JavaScript and React...")</span>
            or
            <span>("Example: "I'm a mechanical engineer and recent graduate of MIT...")</span>
          </p>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="form">
        <div class="error-message-container">
          <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
        <form>
          <div class="input-box">
            <label for="brief_summary">Give a Brief Summary</label>
            <textarea
              ref="brief_summary"
              @input="updateCharacterCount"
              name="brief_summary"
              v-model="form.brief_summary"
              required
            ></textarea>
            <div class="character-counter">
              {{ characterCount }}/{{ maxCharacterCount }}
            </div>
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
import { mapActions, mapGetters } from 'vuex';
import MainLogo from '@/components/UI/MainLogo';
import TextLoadingSpinner from '@/components/UI/TextLoadingSpinner';
export default {
  name: 'CareerSummary',
  components: {
    MainLogo,
    TextLoadingSpinner,
  },
  data() {
    return {
      loading: false,
      errorMessage: '',
      form: {
        brief_summary: '',
      },
      maxCharacterCount: 500,
      characterCount: 0,
    };
  },
  computed: {
    ...mapGetters(['getUserData']),
    userData() {
      return this.getUserData;
    },
    validationSchema() {
      return Joi.object({
        brief_summary: Joi.string().max(this.maxCharacterCount).required().messages({
          'string.base': 'Brief summary should be a type of text',
          'string.empty': 'Brief summary cannot be an empty field',
          'string.max': `Brief summary should have a maximum length of ${this.maxCharacterCount} characters`,
          'any.required': 'Brief summary is a required field',
        }),
      });
    },
  },
  methods: {
    ...mapActions(['setSummaryInfo', 'hydrateUserData', 'changeSummary']),
    async formSubmit() {
      this.errorMessage = '';
      this.loading = true;
      const userDetails = {
        brief_summary: this.form.brief_summary,
      };
      const { error } = this.validationSchema.validate(userDetails);
      if (error) {
        this.loading = false;
        this.errorMessage = error.details[0].message;
        return;
      }
      const response = await this.setSummaryInfo(userDetails);
      if (response.status === 200) {
        await this.hydrateUserData();
        if (this.userData.brief_summary) {
          this.loading = false;
          this.changeSummary();
          this.$emit('goToNext');
          return;
        }
        this.loading = false;
        this.errorMessage = 'There was an error saving your information. Please try again.';
        return;
      }
      this.errorMessage = 'There was an error saving your information. Please try again.';
      this.loading = false;
    },
    updateCharacterCount() {
      const inputText = this.form.brief_summary;
      if (inputText.length <= this.maxCharacterCount) {
        this.characterCount = inputText.length;
      } else {
        // Truncate the input text if it exceeds the maximum character count
        this.form.brief_summary = inputText.substring(0, this.maxCharacterCount);
      }
    },
  },
  mounted() {
    if(!this.getUserData) {
      this.$router.push("/");
      return;
    }
    if(this.getUserData.brief_summary) {
      this.$emit('goToNext');
      return;
    }
    this.$nextTick(() => {
      this.$refs.brief_summary.focus();
    });
  },
  validations: {
    brief_summary: Joi.string().max(500).required(),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.career-summary {
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
        height: 60%;
        min-height: 200px;
        label {
          margin-bottom: 0.5em;
        }
        textarea {
          @include mainTextarea;
        }
        .character-counter {
          @include flex(row, flex-end, center);
          width: 100%;
          font-size: 0.75em;
          color: $ResCream;
          margin-top: 0.5em;
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
