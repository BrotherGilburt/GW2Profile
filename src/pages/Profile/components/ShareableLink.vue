<template>
  <profile-section headline="Shareable Link:">
    <router-link class="truncate" :to="routerUrl">{{url}}</router-link>
  </profile-section>
</template>

<script>
import ProfileSection from "@/pages/components/ProfileSection.vue";

export default {
  components: {
    ProfileSection
  },
  computed: {
    url() {
      let link = this.$store.getters.shareableLink;
      if (link == null) return "N/A";
      return link;
    },
    routerUrl() {
      let link = this.$store.getters.shareableRouterLink;
      if (link == null) return "/profile";
      return link;
    }
  }
};
</script>
