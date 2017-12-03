<template>
  <main-section headline="Profile">
    <apikey-input v-if="status"></apikey-input>
    <account-info-input v-if="status"></account-info-input>
    <shareable-link v-if="status"></shareable-link>
  </main-section>
</template>

<script>
import MainSection from './components/MainSection.vue'
import ApikeyInput from './components/ApikeyInput.vue'
import AccountInfoInput from './components/AccountInfoInput.vue'
import ShareableLink from './components/ShareableLink.vue'

export default {
  data() {
      return {}
  },
  components: {
      MainSection,
      ApikeyInput,
      AccountInfoInput,
      ShareableLink
  },
  computed: {
      status() {
          return this.$store.getters.status
      }
  }
}
</script>
