<template>
  <div>
    <div class="main-education-container">
      <div class="education-title">
        <p>
          Do you have any education details you'd like to add to your resume?
        </p>
        <p>
          (Examples include Degree: Computer Science, School: XYZ University,
          Graduation Year: 2022)
        </p>
      </div>
      <div class="education-number">
        <p>How many education entries would you like to add? (Max 4)</p>
        <input
          type="text"
          id="education-number"
          ref="educationNumber"
          v-model="educationNumber"
          @keyup.enter="submitEducationNumber"
        />
      </div>
      <div class="education-entry" v-if="showEducation">
        <div
          class="education-category"
          v-for="index in parseInt(educationNumber)"
          :key="index"
        >
          <label :for="'education-category-' + index">Entry {{ index }}</label>
          <input
            type="text"
            :id="'education-category-' + index"
            ref="educationFields"
            v-model="educationCategories[index]"
            @keyup.enter="submitEducationArray"
          />
          <p>:</p>
          <input
            type="text"
            :id="'education-details-' + index"
            placeholder="Details (comma-separated)"
            v-model="educationDetails[index]"
            @keyup.enter="submitEducationArray"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "UserEducation",
  data() {
    return {
      showEducation: false,
      educationNumber: "",
      educationCategories: [],
      educationDetails: [],
      educationArray: [],
    };
  },
  methods: {
    ...mapMutations(["addEducationDetails"]),
    ...mapActions(["submitEducation"]),
    submitEducationNumber() {
      if (this.educationNumber > 4) {
        this.$emit("message", "Max 4 entries allowed");
      } else if (this.educationNumber < 1 || this.educationNumber == "") {
        this.$emit("nextPage");
      } else {
        this.showEducation = true;
        this.$nextTick(() => {
          if (
            this.$refs.educationFields &&
            this.$refs.educationFields.length > 0
          ) {
            this.$refs.educationFields[0].focus();
          }
        });
      }
    },
    async submitEducationArray() {
      this.$emit("loading");
      for (let i = 1; i <= this.educationNumber; i++) {
        this.educationArray.push({
          category: this.educationCategories[i],
          details: this.educationDetails[i]
            .split(",")
            .map((detail) => detail.trim()),
        });
      }
      this.addEducationDetails(this.educationArray);
      await this.submitEducation();
      this.$emit("noLoading");
      this.$emit("nextPage");
    },
  },
  watch: {
    educationNumber() {
      if (this.educationNumber > 8) {
        this.$emit("message", "Max 8 entries allowed");
        this.educationNumber = "";
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.educationNumber.focus();
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.main-education-container {
  height: 100vh;
  width: 100%;
  @include flex(column, center, flex-start);
  gap: 5em;

  .education-title {
    width: 100%;
    height: 100px;
    @include flexCenterColumn();
    gap: 1em;
  }

  .education-number {
    width: 100%;
    height: 100px;
    @include flexCenter();
    gap: 1em;

    input {
      width: 5em;
      border-bottom: 1px dotted $ResGreen;
    }
  }

  .education-entry {
    width: 100%;
    height: auto;
    @include flexCenterColumn();
    gap: 1em;

    .education-category {
      width: 100%;
      @include flexCenter();
      gap: 1em;

      input {
        width: 10em;
        border-bottom: 1px dotted $ResGreen;

        &:last-of-type {
          width: 35em; // wider input for comma-separated details
        }
      }

      label {
        white-space: nowrap; // keep the label in one line
      }
    }
  }
}
</style>
