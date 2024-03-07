<template>
  <div class="generator-settings-container">
    <div class="gen-settings-window">
      <div class="left-side-text">
        <div class="text-container">
          <h1>{{ menuDisplayToText }} Settings</h1>
          <p>Adjust your {{ menuDisplayToText }} settings by selecting the options to the right. The options on the top will determine the tone of the language returned from the generator. The options on the bottom will determine the length of the respone that is returned. Keep in mind that longer responses use a few more credits.</p>
        </div>
      </div>
      <div class="right-side-settings">
        <div class="top-menu-bar">
          <div class="menu-option" @click="changeWindow('resume')" :class="{ active: window === 'resume' }">Resume</div>
            <div class="menu-option" @click="changeWindow('coverLetter')" :class="{ active: window === 'coverLetter' }">Cover Letter</div>
          <div class="menu-option" @click="changeWindow('questions')" :class="{ active: window === 'questions' }">Questions</div>
        </div>
        <div class="loading-container" v-if="loading">
          <MainLoadingSpinner />
          <p>Loading...</p>
        </div>
        <div class="options-container" v-if="!loading">
          <div class="top-settings">
            <h2>Tone Settings</h2>
            <div class="tone-settings" :class="{ activeTone: tone === 'professional'}">
              <h3>Professional</h3>
              <p>This will make the style and vocabulary in your {{ menuDisplayToText }} more professional</p>
            </div>
            <div class="tone-settings" :class="{ activeTone: tone === 'academic'}">
              <h3>Academic</h3>
              <p>This will make the style and vocabulary in your {{ menuDisplayToText }} more academic</p>
            </div>
            <div class="tone-settings" :class="{ activeTone: tone === 'technical'}">
              <h3>Technical</h3>
              <p>This will make the style and vocabulary in your {{ menuDisplayToText }} more technical</p>
            </div>
            <div class="tone-settings" :class="{ activeTone: tone === 'casual'}">
              <h3>Casual</h3>
              <p>This will make the style and vocabulary in your {{ menuDisplayToText }} more casual</p>
            </div>
            <div class="bottom-settings">
              <div class="length-container-settings">
                <h2>Length Settings</h2>
                <div class="length-button-container">
                  <div class="length-settings" :class="{ activeLength: length === 'concise'}">
                    <h3>Concise</h3>
                  </div>
                  <div class="length-settings" :class="{ activeLength: length === 'standard'}">
                    <h3>Standard</h3>
                  </div>
                  <div class="length-settings" :class="{ activeLength: length === 'verbose'}">
                    <h3>Verbose</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainLoadingSpinner from "@/components/UI/MainLoadingSpinner";
export default {
  name: "GeneratorSettings",
  components: {
    MainLoadingSpinner,
  },
  data() {
    return {
      loading: false,
      window: "resume",
      tone: "professional",
      length: "standard",
    }
  },
  computed: {
    menuDisplayToText() {
      return this.window === "resume" ? "Resume" : this.window === "coverLetter" ? "Cover Letter" : "Questions";
    },
  },
  methods: {
    changeWindow(window) {
      this.window = window;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.generator-settings-container {
  width: 100%;
  height: 100%;
  @include flexCenter;
  .gen-settings-window {
    width: 80%;
    height: 80%;
    @include flexCenter;
    background-color: $ResGrey;
    border-radius: $ResRoundedEdges;
    .left-side-text {
      width: 50%;
      height: 100%;
      @include flexCenterColumn;
      .text-container {
        width: 75%;
        height: auto;
        @include flex(column, center, flex-start);
        gap: 1em;
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1rem;
          width: 80%;
        }
      }
    }
    .right-side-settings {
      width: 50%;
      height: 100%;
      @include flexCenterColumn;
      .top-menu-bar {
        width: 100%;
        height: 50px;
        @include flex(row, space-around, center);
        .menu-option {
          width: 100%;
          height: 100%;
          @include flexCenter;
          cursor: pointer;
          &:hover {
            background-color: $ResCream;
            color: $ResGrey;
          }
        }
        .active {
          border-bottom: 2px solid $ResPurple;
        }
      }
      .loading-container {
        width: 100%;
        height: 100%;
        @include flexCenterColumn;
        gap: 1em;
      }
      .options-container {
        width: 100%;
        height: calc(100% - 50px);
        @include flexCenterColumn;
        gap: 1em;
        .top-settings {
          width: 100%;
          @include flexCenterColumn;
          gap: 1em;
          .tone-settings {
            width: 90%;
            height: 75px;
            border: 1px solid $ResCream;
            padding: 0.5em;
            @include flex(column, center, flex-start);
            gap: 0.5em;
            border-radius: $ResRoundedEdges;
            cursor: pointer;
            h3 {
              font-size: 1rem;
            }
            p {
              font-size: 1rem;
            }
            &:hover {
              border: 1px solid $ResPurple;
              background-color: $ResBlack;
            }
          }
          .activeTone {
            border: 1px solid $ResPurple;
            background-color: $ResBlack;
          }
          .bottom-settings {
            width: 100%;
            @include flexCenterColumn;
            .length-container-settings {
              width: 90%;
              height: 100%;
              @include flexCenterColumn;
              gap: 1em;
              .length-button-container {
                width: 100%;
                height: 100%;
                @include flexCenter;
                gap: 1em;
                .length-settings {
                  width: 100%;
                  height: 50px;
                  border: 1px solid $ResCream;
                  padding: 0.5em;
                  @include flexCenter;
                  gap: 0.5em;
                  border-radius: $ResRoundedEdges;
                  cursor: pointer;
                  h3 {
                    font-size: 1rem;
                  }
                  p {
                    font-size: 1rem;
                  }
                }
                .activeLength {
                  border: 1px solid $ResPurple;
                  background-color: $ResBlack;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>