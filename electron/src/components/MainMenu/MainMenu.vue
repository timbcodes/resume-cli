<template>
  <div>
    <div class="main-menu-container">
      <div class="center-section">
        <div class="left-section">
          <p>1. Create New Base Resume</p>
          <p>2. Edit User Details</p>
          <p>3. Edit Main Resume Details</p>
          <p>4. Download Main Resume</p>
          <p>5. Edit Generation Parameters</p>
        </div>
        <div class="right-section">
          <p>6. Generate Resume & Cover Letter</p>
          <p>7. Generate New Resume</p>
          <p>8. Generate New Cover Letter</p>
          <p>9. View All Created Jobs</p>
          <p>10. User Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-menu-container {
  width: 100%;
  height: 100%;
  @include flexCenter();
  .center-section {
    @include flex(row, space-evenly, flex-start);
    gap: 5em;
  }
  .left-section,
  .right-section {
    gap: 1em;
    @include flex(column, flex-start, flex-start);
  }
  .menu-selection-container {
    margin-top: 5em;
    margin-left: 1em;
  }
}
</style>
