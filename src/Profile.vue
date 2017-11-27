<template>
    <main-section>
        <span slot="header">Profile</span>
        <apikey-input v-if="status"></apikey-input>
        <profile-section v-if="status">
            <span slot="header">Account Info:</span>
            <account-info-input></account-info-input>
        </profile-section>
    </main-section>
</template>

<script>
import MainSection from './components/MainSection.vue'
import ApikeyInput from './components/ApikeyInput.vue'
import AccountInfoInput from './components/AccountInfoInput.vue'
import ProfileSection from './components/ProfileSection.vue'

export default {
  data() {
      return {}
  },
  components: {
      MainSection,
      ApikeyInput,
      ProfileSection,
      AccountInfoInput
  },
  computed: {
      status() {
          return this.$store.getters.status
      }
  }
}
</script>

<style scoped>

</style>
