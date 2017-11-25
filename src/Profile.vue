<template>
    <main-section>
        <span slot="header">Profile</span>
        <apikey-input v-if="status"></apikey-input>
    </main-section>
</template>

<script>
import MainSection from './components/MainSection.vue'
import ApikeyInput from './components/ApikeyInput.vue'

export default {
  data() {
      return {}
  },
  components: {
      MainSection,
      ApikeyInput
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
