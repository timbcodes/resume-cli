<template>
  <div class="generator-container">
    <div class="main-gen-window">
      <div class="content-container">
        <div class="left">
          <div class="top-title">
            <h2>Resume Settings</h2>
          </div>
          <div class="settings-container">
            <div class="top-settings">
              <h2>Tone Settings</h2>
              <div class="tone-settings">
                <h3>Professional</h3>
                <p>This will make the style and vocabulary in your resume more professional</p>
              </div>
              <div class="tone-settings">
                <h3>Academic</h3>
                <p>This will make the style and vocabulary in your resume more academic</p>
              </div>
              <div class="tone-settings">
                <h3>Technical</h3>
                <p>This will make the style and vocabulary in your resume more technical</p>
              </div>
              <div class="tone-settings">
                <h3>Casual</h3>
                <p>This will make the style and vocabulary in your resume more casual</p>
              </div>
            </div>
            <div class="divider-bar"></div>
            <div class="bottom-settings">
              <div class="length-container-settings">
                <h2>Length Settings</h2>
                <div class="length-settings">
                  <h3>Short</h3>
                  <p>This will make your resume shorter</p>
                </div>
                <div class="length-settings">
                  <h3>Medium</h3>
                  <p>This will make your resume medium length</p>
                </div>
                <div class="length-settings">
                  <h3>Long</h3>
                  <p>This will make your resume longer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vertical-divider"></div>
        <div class="center">
          <div class="top-title">
            <h2>Cover Letter Settings</h2>
          </div>
          <div class="settings-container">
            <div class="top-settings">
              <h2>Tone Settings</h2>
              <div class="tone-settings">
                <h3>Professional</h3>
                <p>This will make the style and vocabulary in your cover letter more professional</p>
              </div>
              <div class="tone-settings">
                <h3>Academic</h3>
                <p>This will make the style and vocabulary in your cover letter more academic</p>
              </div>
              <div class="tone-settings">
                <h3>Technical</h3>
                <p>This will make the style and vocabulary in your cover letter more technical</p>
              </div>
              <div class="tone-settings">
                <h3>Casual</h3>
                <p>This will make the style and vocabulary in your cover letter more casual</p>
              </div>
            </div>
            <div class="divider-bar"></div>
            <div class="bottom-settings">
              <div class="length-container-settings">
                <h2>Length Settings</h2>
                <div class="length-settings">
                  <h3>Short</h3>
                  <p>This will make your cover letter shorter</p>
                </div>
                <div class="length-settings">
                  <h3>Medium</h3>
                  <p>This will make your cover letter medium length</p>
                </div>
                <div class="length-settings">
                  <h3>Long</h3>
                  <p>This will make your cover letter longer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vertical-divider"></div>
        <div class="right">
          <div class="top-title">
          <h2>Question Settings</h2>
          </div>
          <div class="settings-container">
            <div class="top-settings">
              <h2>Tone Settings</h2>
              <div class="tone-settings">
                <h3>Professional</h3>
                <p>This will make the style and vocabulary in your responses more professional</p>
              </div>
              <div class="tone-settings">
                <h3>Academic</h3>
                <p>This will make the style and vocabulary in your responses more academic</p>
              </div>
              <div class="tone-settings">
                <h3>Technical</h3>
                <p>This will make the style and vocabulary in your responses more technical</p>
              </div>
              <div class="tone-settings">
                <h3>Casual</h3>
                <p>This will make the style and vocabulary in your responses more casual</p>
              </div>
            </div>
            <div class="divider-bar"></div>
            <div class="bottom-settings">
              <div class="length-container-settings">
                <h2>Length Settings</h2>
                <div class="length-settings">
                  <h3>Short</h3>
                  <p>This will make your responses shorter</p>
                </div>
                <div class="length-settings">
                  <h3>Medium</h3>
                  <p>This will make your responses medium length</p>
                </div>
                <div class="length-settings">
                  <h3>Long</h3>
                  <p>This will make your responses longer</p>
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
export default {
  name: "GeneratorSettings",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.generator-container {
  @include flexCenterColumn;
  height: 100%;
  width: 100%;
  .main-gen-window {
    width: 80%;
    height: 80%;
    background-color: $ResGrey;
    border-radius: $ResRoundedEdges;
    .content-container {
      @include flexCenter;
      height: calc(100% - 2em);
      .left,
      .center,
      .right {
        @include flexCenterColumn;
        width: 33%;
        height: 100%;
        gap: 2em;
        .top-title {
          h2 {
            font-size: 1.5rem;
            color: $ResCream;
          }
        }
        .settings-container {
          width: 90%;
          @include flexCenterColumn;
          .top-settings {
            width: 100%;
            @include flexCenterColumn;
            gap: 0.5em;
            h2 {
              width: 90%;
              @include flex(row, flex-start, center);
              font-size: 1rem;
              color: $ResCream;
            }
            .tone-settings {
              width: 90%;
              height: auto;
              border: 1px solid $ResCream;
              padding: 0.5em;
              @include flex(column, center, flex-start);
              gap: 0.5em;
              border-radius: $ResRoundedEdges;
              cursor: pointer;
              background-color: $ResCream;
              color: $ResGrey;
              h3 {
                font-size: 1rem;
              }
              p {
                font-size: 1rem;
              }
            }
          }
          .divider-bar {
            @include flexCenter;
            width: 50%;
            height: 1px;
            background-color: $ResBorder;
            margin: 1em 0;
          }
          .bottom-settings {
            width: 100%;
            height: auto;
            @include flexCenterColumn;
            .length-container-settings {
              width: 100%;
              @include flexCenterColumn;
              gap: 0.5em;
              h2 {
                width: 90%;
                @include flex(row, flex-start, center);
                font-size: 1rem;
                color: $ResCream;
              }
              .length-settings {
                width: 90%;
                height: auto;
                border: 1px solid $ResCream;
                padding: 0.5em;
                @include flex(column, center, flex-start);
                gap: 0.5em;
                border-radius: $ResRoundedEdges;
                cursor: pointer;
                background-color: $ResCream;
                color: $ResGrey;
                h3 {
                  font-size: 1rem;
                }
                p {
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
      .vertical-divider {
        width: 1px;
        height: 90%;
        background-color: $ResBorder;
      }
    }
  }
}
</style>