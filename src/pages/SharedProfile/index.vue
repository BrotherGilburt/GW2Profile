<template>
  <main-section headline="Shared Profile">
    <span>{{uid}}</span>
    <shared-account-info v-if="valid"></shared-account-info>
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
  watch: {
    uid() {
      //update store
    }
  },
  computed: {
    valid() {
      return true
    },
    uid() {
      return this.$route.params.uid
    }
  }
}
</script>

<style scoped>

</style>
