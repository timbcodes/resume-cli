<template>
  <div class="menu-items">
    <div class="menu-section">
      <div class="first-section">
        <div class="dashboard" :class="{'active-menu-item': currentPage === 'Dashboard'}" @click="setNewPage('Dashboard')">
          <i class="bi bi-speedometer"></i>
          <span>Dashboard</span>
        </div>
        <div class="jobs">
          <i class="bi bi-briefcase-fill"></i>
          <span>My Job Search</span>
        </div>
        <div class="quick-apply">
          <i class="bi bi-clipboard-plus-fill"></i>
          <span>Quick Apply</span>
        </div>
      </div>
      <div class="divider-bar"></div>
      <div class="second-section">
        <div class="resume">
          <i class="bi bi-file-earmark-text-fill"></i>
          <span>Resumes</span>
        </div>
        <div class="cover-letters">
          <i class="bi bi-envelope-fill"></i>
          <span>Cover Letters</span>
        </div>
        <div class="application-questions">
          <i class="bi bi-patch-question-fill"></i>
          <span>Applicant Questions</span>
        </div>
        <div class="interview-questions">
          <i class="bi bi-person-raised-hand"></i>
          <span>Interview Questions</span>
        </div>
        <div class="linkedin">
          <i class="bi bi-linkedin"></i>
          <span>LinkedIn Builder</span>
        </div>
      </div>
      <div class="divider-bar"></div>
      <div class="third-section">
        <div class="candidate-details" :class="{'active-menu-item': currentPage === 'Candidate Details'}" @click="setNewPage('Candidate Details')">
          <i class="bi bi-person-fill"></i>
          <span>Candidate Details</span>
        </div>
        <div class="generation-settings" :class="{'active-menu-item': currentPage === 'Generator Settings'}" @click="setNewPage('Generator Settings')">
          <i class="bi bi-gear-fill"></i>
          <span>Generator Settings</span>
        </div>
        <div class="credits">
          <i class="bi bi-credit-card-fill"></i>
          <span>Credits</span>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="settings">
        <i class="bi bi-gear-fill"></i>
        <span>Settings</span>
      </div>
      <div class="logout" @click="logout">
        <i class="bi bi-box-arrow-right"></i>
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "MenuItems",
  computed: {
    ...mapGetters(["getCurrentPage", "getUserAuthModalState"]),
    currentPage() {
      return this.getCurrentPage;
    },
  },
  methods: {
    ...mapActions(["logoutUser"]),
    ...mapMutations(["setCurrentPage"]),
    setNewPage(page) {
      this.setCurrentPage(page);
    },
    logout() {
      this.logoutUser();
      this.$router.go();
    }
  },
  beforeMount() {
    this.getCurrentPage;
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.menu-items {
  @include flex(column, space-between, flex-start);
  width: 100%;
  height: 100%;
  .active-menu-item {
    background-color: $ResPurple;
    color: $ResWhite;
    i {
      color: $ResWhite;
    }
  }
  .menu-section {
    @include flex(column, flex-start, center);
    width: 100%;
    .first-section {
      @include flex(column, flex-start, center);
      width: 100%;
      .dashboard,
      .jobs,
      .quick-apply,
      .resume,
      .cover-letters,
      .linkedin {
        @include flex(row, flex-start, center);
        width: 100%;
        padding: 1em;
        i {
          font-size: 1em;
          margin-right: 0.5em;
        }
        &:hover {
          background-color: $ResWhite;
          color: $ResPurple;
          cursor: pointer;
          i {
            color: $ResPurple;
          }
        }
      }
    }
    .divider-bar {
      width: 80%;
      height: 1px;
      background-color: $ResBorder;
      margin: 1em 0;
    }
    .second-section {
      @include flex(column, flex-start, center);
      width: 100%;
      .resume,
      .cover-letters,
      .application-questions,
      .interview-questions,
      .linkedin {
        @include flex(row, flex-start, center);
        width: 100%;
        padding: 1em;
        i {
          font-size: 1em;
          margin-right: 0.5em;
        }
        &:hover {
          background-color: $ResWhite;
          color: $ResPurple;
          cursor: pointer;
          i {
            color: $ResPurple;
          }
        }
      }
    }
    .third-section {
      @include flex(column, flex-start, center);
      width: 100%;
      .candidate-details,
      .generation-settings,
      .credits {
        @include flex(row, flex-start, center);
        width: 100%;
        padding: 1em;
        i {
          font-size: 1em;
          margin-right: 0.5em;
        }
        &:hover {
          background-color: $ResWhite;
          color: $ResPurple;
          cursor: pointer;
          i {
            color: $ResPurple;
          }
        }
      }
    }
  }
  .bottom-section {
    @include flex(column, flex-start, center);
    width: 100%;
    .settings,
    .logout {
      @include flex(row, flex-start, center);
      width: 100%;
      padding: 1em;
      i {
        font-size: 1em;
        margin-right: 0.5em;
      }
      &:hover {
        background-color: $ResWhite;
        color: $ResPurple;
        cursor: pointer;
        i {
          color: $ResPurple;
        }
      }
    }
  }
}
</style>
