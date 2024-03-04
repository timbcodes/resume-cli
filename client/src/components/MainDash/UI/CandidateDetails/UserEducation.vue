<template>
  <div>
    <h1>Education</h1>
  </div>
</template>
<script>
export default {
  name: "UserEducation",
  props: {
    currentUser: Object,
  },
  data() {
    return {
      education: this.currentUser.education,
    };
  },
  async mounted() {
    console.log(this.currentUser);
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
</style>