<template>
  <main-section headline="Profile">
    <apikey-input v-if="status"></apikey-input>
    <account-info-input v-if="status && isKey"></account-info-input>
    <shareable-link v-if="status && isKey"></shareable-link>
    <div v-if="!status">
      <h2>Login to view your profile</h2>
    </div>
  </main-section>
</template>

<script>
import MainSection from '../components/MainSection.vue'
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
      },
      isKey() {
        return this.$store.getters.apikey.value !== null
      }
  }
}
</script>
