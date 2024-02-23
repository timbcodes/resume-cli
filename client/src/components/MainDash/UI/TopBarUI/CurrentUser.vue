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
import { mapGetters } from "vuex";
export default {
  name: "CurrentUser",
  methods: {
    getInitials() {
      return this.userName
        .split(" ")
        .map((n) => n[0])
        .join("");
    }
  },
  computed: {
    ...mapGetters(["getUserData"]),
    userAvatar() {
      return this.getInitials();
    },
    userName() {
      return `${this.getUserData.first_name} ${this.getUserData.last_name}`
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
