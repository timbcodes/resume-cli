<template>
  <div class="main-body">
    <div class="main-content">
      <div class="big-box">
        <UserInfo v-if="page=='personal'" @goToNext="goToCareer" />
        <CareerDetails v-if="page=='career'" @goToNext="goToSummary" />
        <CareerSummary v-if="page=='summary'" @goToNext="goToEducation" />
        <UserEducation v-if="page=='education'" @goToNext="goToDash" />
      </div>
    </div>
    <div class="logo-footer">
      <img src="@/assets/borderland-logo.png" alt="borderland software logo">
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UserInfo from "@/components/NewUserSetup/UserInfo";
import CareerDetails from "@/components/NewUserSetup/CareerDetails";
import CareerSummary from "@/components/NewUserSetup/CareerSummary";
import UserEducation from "@/components/NewUserSetup/UserEducation";
export default {
  name: "NewUserSetup",
  components: {
    UserInfo,
    CareerDetails,
    CareerSummary,
    UserEducation,
  },
  data() {
    return {
      page: "personal",
    };
  },
  computed: {
    ...mapGetters(["getLoginData"]),
    loginData() {
      return this.getLoginData;
    },
  },
  methods: {
    startPage() {
      if (!this.loginData.personal_info) {
        this.page = "personal";
      } else if (!this.loginData.additional_info) {
        this.page = "career";
      } else if (!this.loginData.summary) {
        this.page = "summary";
      } else if (!this.loginData.education) {
        this.page = "education";
      } else {
        this.$router.push("/");
      }
    },
    goToCareer() {
      this.page = "career";
    },
    goToSummary() {
      this.page = "summary";
    },
    goToEducation() {
      this.page = "education";
    },
    goToDash() {
      this.$router.push("/");
    },
  },
  mounted() {
    if(!this.getLoginData) {
      this.$router.push("/");
      return;
    }
    if(this.loginData.personal_info && this.loginData.career_info && this.loginData.summary && this.loginData.education) {
      this.$router.push("/");
      return;
    }
    this.startPage();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.main-body {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/setup.jpg");
  background-size: cover;
  background-position: center;
  .main-content {
    width: 100%;
    height: calc(100vh - 50px);
    @include flexCenter;
    .big-box {
      width: 1000px;
      height: 600px;
      background-color: rgba(0, 0, 0, 0.75);
      border-radius: $ResRoundedEdges;
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.2);
    }
  }
  .logo-footer {
    width: 100%;
    height: 50px;
    @include flex(row, flex-end, center);
    img {
      margin-right: 1em;
      height: 20px;
    }
  }
}
</style>
