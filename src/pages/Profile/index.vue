<template>
  <main-section headline="Profile">
    <apikey-input class="full_section" v-if="status"></apikey-input>
    <account-info-input class="left_section" v-if="status && isKey"></account-info-input>
    <personal-info-input class="right_section"  v-if="status && isKey"></personal-info-input>
    <shareable-link class="full_section" v-if="status && isKey"></shareable-link>
    <h2 v-if="!status">Login to view your profile</h2>
  </main-section>
</template>

<script>
import MainSection from '@/pages/components/MainSection.vue'
import ApikeyInput from './components/ApikeyInput.vue'
import AccountInfoInput from './components/AccountInfoInput.vue'
import PersonalInfoInput from './components/PersonalInfoInput.vue'
import ShareableLink from './components/ShareableLink.vue'

export default {
  data() {
      return {}
  },
  components: {
      MainSection,
      ApikeyInput,
      AccountInfoInput,
      PersonalInfoInput,
      ShareableLink
  },
  computed: {
      status() {
        return this.$store.getters.status
      },
      isKey() {
        return this.$store.getters.apikeyValue !== null
      }
  }
}
</script>
