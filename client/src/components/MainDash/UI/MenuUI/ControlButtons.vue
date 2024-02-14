<template>
  <div class="control-buttons">
    <div class="messages">
      <i class="bi bi-chat-left-text"></i>
    </div>
    <div class="settings">
      <i class="bi bi-gear"></i>
    </div>
    <div class="logout">
      <i class="bi bi-box-arrow-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "ControlButtons",
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
.control-buttons {
  @include flexCenter;
  width: 100%;
  height: 50px;
  .messages,
  .settings,
  .logout {
    @include flexCenter;
    height: 100%;
    font-size: 1.5em;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: $ResSmoke;
    }
  }
}
</style>
