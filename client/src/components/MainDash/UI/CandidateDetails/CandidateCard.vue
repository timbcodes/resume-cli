<template>
  <div class="candidate-card">
    <div class="loading-container" v-if="loading">
      <MainLoadingSpinner />
      <p>Loading...</p>
    </div>
    <div class="user-details" v-if="!loading">
      <div class="main-data">
        <div class="user-avatar">
          {{ userAvatar }}
        </div>
        <div class="user-name">
          <span>{{ userName }}</span>
        </div>
        <div class="email">
          <span>{{ loggedInUser.email }}</span>
        </div>
      </div>
      <div class="secondary-data">
        <DetailsDisplay
          v-if="!edit"
          :currentUser="user"
          @toggle="toggleEdit"
        />
        <DetailsEditForm
          v-if="edit"
          :currentUser="user"
          @toggle="toggleEdit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MainLoadingSpinner from '@/components/UI/MainLoadingSpinner';
import DetailsDisplay from './DetailsDisplay';
import DetailsEditForm from './DetailsEditForm';
export default {
  name: "CandidateCard",
  components: {
    MainLoadingSpinner,
    DetailsDisplay,
    DetailsEditForm,
  },
  props: {
    loading: Boolean,
    user: Object,
    loggedInUser: Object,
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    getInitials() {
      return this.userName
        .split(" ")
        .map((n) => n[0])
        .join("");
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
  },
  computed: {
    userAvatar() {
      return this.getInitials();
    },
    userName() {
      return `${this.user.first_name} ${this.user.last_name}`
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.candidate-card {
  width: 80%;
  height: 60%;
  min-width: 300px;
  min-height: 600px;
  border-radius: $ResRoundedEdges;
  background-color: $ResGrey;
  .loading-container {
    width: 100%;
    height: 100%;
    @include flexCenterColumn;
    gap: 1em;
  }
  .user-details {
    width: 100%;
    height: 100%;
    .main-data {
      width: 100%;
      height: 30%;
      @include flexCenterColumn;
      .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: $ResPurple;
      color: $ResWhite;
      font-size: 2rem;
      @include flexCenter;
      }
      .user-name {
        font-size: 2rem;
        font-weight: 600;
      }
      .email {
        margin-top: 0.25em;
      }
    }
    .secondary-data {
      width: 100%;
      height: 70%;
      @include flexCenterColumn;
    }
  }
}
</style>