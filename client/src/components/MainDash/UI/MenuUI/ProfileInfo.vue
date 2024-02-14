<template>
  <div class="profile-info">
    <div class="initials-circle">
      <p class="initials">TB</p>  
    </div>
    <div class="user-info">
      <p class="user-name">Timothy Bradford</p>
      <p class="user-email">tim@timb.codes</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileInfo",
  data() {
    return {
      // data
    };
  },
  methods: {
    // methods
  },
  created() {
    // created
  },
  mounted() {
    // mounted
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.profile-info {
  @include flexCenterColumn;
  width: 100%;
  height: 100%;
  gap: 0.5em;
  .initials-circle {
    @include flexCenter;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $ResPurple;
    .initials {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .user-info {
    @include flex(column, flex-start, center);
    gap: 0.25em;    
    .user-name {
      font-size: 0.8rem;
      font-weight: 700;
    }
    .user-email {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
}
</style>
