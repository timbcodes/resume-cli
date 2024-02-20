<template>
  <div class="current-user">
    <div class="user-avatar">
      {{ userAvatar }}
    </div>
    <div class="user-name">
      <span>{{ userName }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CurrentUser",
  data() {
    return {
      userName: "Timothy Bradford",
    };
  },
  methods: {
    getInitials() {
      return this.userName
        .split(" ")
        .map((n) => n[0])
        .join("");
    }
  },
  computed: {
    userAvatar() {
      return this.getInitials();
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.current-user {
  @include flex(row, center, center);
  gap: 0.5em;
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $ResPurple;
    color: $ResWhite;
    font-size: 1rem;
    @include flex(row, center, center);
  }
  .user-name {
    font-size: 1.2rem;
  }
}
</style>
