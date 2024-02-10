<template>
  <div>
    <div class="main-links-container">
      <div class="link-title">
        <p>Do you have any URLs you'd like to add to your resume?</p>
        <p>(Examples include LinkedIn, Twitter, GitHub, Behance, etc.)</p>
      </div>
      <div class="link-number">
        <p>How many links would you like to add? (Max 5)</p>
        <input
          type="text"
          id="link-number"
          ref="linkNumber"
          v-model="linkNumber"
          @keyup.enter="submitLinkNumber"
        />
      </div>
      <div class="link-fix">
        <div class="link-url" v-if="showLink">
          <div class="link-title">
            <p>Enter links in the following format (title : URL)</p>
          </div>
          <div class="links">
            <div
              class="link"
              v-for="index in parseInt(linkNumber)"
              :key="index"
            >
              <label :for="'link-' + index"
                >Link {{ index }}.......................</label
              >
              <input
                type="text"
                :id="'link-' + index"
                ref="linkFields"
                v-model="links[index]"
                @keyup.enter="submitLinkArray"
              />
              <p>:</p>
              <input
                type="text"
                :id="'link-name-' + index"
                v-model="linkNames[index]"
                @keyup.enter="submitLinkArray"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "JobLinks",
  data() {
    return {
      showLink: false,
      linkNumber: "",
      links: [],
      linkNames: [],
      linkArray: [],
    };
  },
  methods: {
    ...mapMutations(["addLinkDetails"]),
    ...mapActions(["submitLinks"]),
    submitLinkNumber() {
      if (this.linkNumber > 5) {
        this.$emit("message", "Max 5 links allowed");
      } else if (this.linkNumber < 1 || this.linkNumber == "") {
        this.$emit("nextPage");
      } else {
        this.showLink = true;
        this.$nextTick(() => {
          if (this.$refs.linkFields && this.$refs.linkFields.length > 0) {
            this.$refs.linkFields[0].focus();
          }
        });
      }
    },
    async submitLinkArray() {
      this.$emit("loading");
      for (let i = 1; i < this.links.length; i++) {
        this.linkArray.push({
          link: this.links[i],
          linkName: this.linkNames[i],
        });
      }
      console.log(this.linkArray);
      this.addLinkDetails(this.linkArray);
      await this.submitLinks();
      this.$emit("noLoading");
      this.$emit("nextPage");
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.linkNumber.focus();
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-links-container {
  height: 100vh;
  width: 100%;
  @include flex(column, center, flex-start);
  gap: 5em;
  .link-title {
    width: 100%;
    height: 100px;
    @include flexCenterColumn();
    gap: 1em;
  }
  .link-number {
    width: 100%;
    height: 100px;
    @include flexCenter();
    gap: 1em;
    input {
      width: 5em;
      border-bottom: 1px dotted $ResGreen;
    }
  }
  .link-fix {
    width: 100%;
    height: 100px;
    @include flexCenterColumn();
    gap: 1em;
    .link-url {
      width: 100%;
      padding: 1em;
      @include flexCenterColumn();
      gap: 1em;
      .link-title {
        width: 100%;
        @include flexCenterColumn();
        gap: 1em;
      }
      .links {
        width: 100%;
        height: 100px;
        @include flexCenterColumn();
        gap: 1em;
        .link {
          width: 100%;
          @include flexCenter();
          gap: 1em;
          input {
            width: 10em;
            border-bottom: 1px dotted $ResGreen;
          }
        }
      }
    }
  }
}
</style>
