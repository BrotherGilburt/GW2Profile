<template>
  <profile-section headline="Shareable Link:">
    <single-button class="profile_section_buttons" slot="profile_section_buttons" :label="'copy'" @click="copy()"></single-button>
    <router-link class="truncate" ref="shareableLink" :to="routerUrl">{{url}}</router-link>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import SingleButton from '@/pages/components/Buttons/SingleButton.vue'

export default {
  components: {
    ProfileSection,
    SingleButton
  },
  computed: {
    url() {
      let link = this.$store.getters.shareableLink
      if (link == null) return 'N/A'
      return link
    },
    routerUrl() {
      let link = this.$store.getters.shareableRouterLink
      if (link == null) return '/profile'
      return link
    }
  },
  methods: {
    copy() {
      let range = document.createRange()
      range.selectNode(this.$refs.shareableLink.$el)
      window.getSelection().addRange(range)
      try {
        let success = document.execCommand('copy')
      } catch(error) {

      }
      window.getSelection().removeAllRanges()
    }
  }
}
</script>
