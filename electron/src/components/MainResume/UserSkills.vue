<template>
  <div>
    <div class="main-skills-container">
      <div class="skill-title">
        <p>Do you have any skills you'd like to add to your resume?</p>
        <p>
          (Examples include Programming: Python, Java, C++; Design: Photoshop,
          Illustrator)
        </p>
      </div>
      <div class="skill-number">
        <p>How many skill categories would you like to add? (Max 8)</p>
        <input
          type="text"
          id="skill-number"
          ref="skillNumber"
          v-model="skillNumber"
          @keyup.enter="submitSkillNumber"
        />
      </div>
      <div class="skill-entry" v-if="showSkill">
        <div
          class="skill-category"
          v-for="index in parseInt(skillNumber)"
          :key="index"
        >
          <label :for="'skill-category-' + index">Category {{ index }}</label>
          <input
            type="text"
            :id="'skill-category-' + index"
            ref="skillFields"
            v-model="skillCategories[index]"
            @keyup.enter="submitSkillArray"
          />
          <p>:</p>
          <input
            type="text"
            :id="'skill-list-' + index"
            placeholder="Skills (comma-separated)"
            v-model="skillLists[index]"
            @keyup.enter="submitSkillArray"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "JobSkills",
  data() {
    return {
      showSkill: false,
      skillNumber: "",
      skillCategories: [],
      skillLists: [],
      skillArray: [],
    };
  },
  methods: {
    ...mapMutations(["addSkillDetails"]),
    ...mapActions(["submitSkills"]),
    submitSkillNumber() {
      if (this.skillNumber > 8) {
        this.$emit("message", "Max 8 categories allowed");
      } else if (this.skillNumber < 1 || this.skillNumber == "") {
        this.$emit("nextPage");
      } else {
        this.showSkill = true;
        this.$nextTick(() => {
          if (this.$refs.skillFields && this.$refs.skillFields.length > 0) {
            this.$refs.skillFields[0].focus();
          }
        });
      }
    },
    async submitSkillArray() {
      this.$emit("loading");
      for (let i = 1; i <= this.skillNumber; i++) {
        this.skillArray.push({
          category: this.skillCategories[i],
          skills: this.skillLists[i].split(",").map((skill) => skill.trim()),
        });
      }
      this.addSkillDetails(this.skillArray);
      await this.submitSkills();
      this.$emit("noLoading");
      this.$emit("nextPage");
    },
  },
  watch: {
    skillNumber() {
      if (this.skillNumber > 8) {
        this.$emit("message", "Max 8 categories allowed");
        this.skillNumber = "";
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.skillNumber.focus();
    });
  },
};
</script>
<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.main-skills-container {
  height: 100vh;
  width: 100%;
  @include flex(column, center, flex-start);
  gap: 5em;

  .skill-title {
    width: 100%;
    height: 100px;
    @include flexCenterColumn();
    gap: 1em;
  }

  .skill-number {
    width: 100%;
    height: 100px;
    @include flexCenter();
    gap: 1em;

    input {
      width: 5em;
      border-bottom: 1px dotted $ResGreen;
    }
  }

  .skill-entry {
    width: 100%;
    height: auto;
    @include flexCenterColumn();
    gap: 1em;

    .skill-category {
      width: 100%;
      @include flexCenter();
      gap: 1em;

      input {
        width: 10em;
        border-bottom: 1px dotted $ResGreen;

        &:last-of-type {
          width: 35em; // wider input for comma-separated skills
        }
      }

      label {
        white-space: nowrap; // keep the label in one line
      }
    }
  }
}
</style>
