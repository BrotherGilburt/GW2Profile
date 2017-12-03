<template>
  <profile-section headline="Shareable Link:">
    <span>{{url}}</span>
  </profile-section>
</template>

<script>
import ProfileSection from './ProfileSection.vue'

export default {
  components: {
      ProfileSection
  },
  computed: {
      url() {

        let link = this.$store.getters.shareableLink
        if (link == null) return 'N/A'
        return link
        /*let uid = this.$store.getters.userid
        if (uid == null) return "N/A"
        return this.$store.getters.domain + uid*/
      }
  }
}
</script>
