<template>
  <main-section headline="Shared Profile">
    <shared-account-info class="left_section" v-if="valid"></shared-account-info>
    <div v-if="!valid">
      <h1>:(</h1>
      <h2>Profile Not Found</h2>
    </div>
    
  </main-section>
</template>

<script>
import MainSection from '../components/MainSection.vue'
import SharedAccountInfo from './components/SharedAccountInfo.vue'

export default {
  components: {
    MainSection,
    SharedAccountInfo
  },
  mounted() {
    this.$store.dispatch('loadSharedProfile', {value: this.uid})
  },
  watch: {
    uid() {
      this.$store.dispatch('loadSharedProfile', {value: this.uid})
    }
  },
  computed: {
    valid() {
      return this.$store.getters.sharedUidValid
    },
    uid() {
      return this.$route.params.uid
    }
  }
}
</script>

<style scoped>

</style>
